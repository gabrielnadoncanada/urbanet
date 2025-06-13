import sharp from 'sharp';
import { globby } from 'globby';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = 'public';

// Configuration for image processing
const CONFIG = {
  // Maximum dimensions (width or height)
  maxDimension: 2048,
  // Maximum file size in bytes (5MB)
  maxFileSize: 5 * 1024 * 1024,
  // Quality settings based on image size
  quality: {
    small: 85,   // < 500KB
    medium: 80,  // 500KB - 2MB
    large: 75,   // 2MB - 5MB
    huge: 70     // > 5MB
  },
  // Resize thresholds
  resize: {
    // If width or height > 3000px, resize to maxDimension
    threshold: 3000,
    // For hero images, allow larger size
    heroMaxDimension: 2560
  }
};

// Helper function to get file size
function getFileSize(filePath) {
  return fs.statSync(filePath).size;
}

// Helper function to determine quality based on file size
function getQualityForSize(fileSize) {
  if (fileSize < 500 * 1024) return CONFIG.quality.small;
  if (fileSize < 2 * 1024 * 1024) return CONFIG.quality.medium;
  if (fileSize < 5 * 1024 * 1024) return CONFIG.quality.large;
  return CONFIG.quality.huge;
}

// Helper function to determine if image should be resized
function shouldResize(metadata, filePath) {
  const isHeroImage = filePath.toLowerCase().includes('hero') || 
                     filePath.toLowerCase().includes('banner');
  const maxDim = isHeroImage ? CONFIG.resize.heroMaxDimension : CONFIG.maxDimension;
  
  return metadata.width > CONFIG.resize.threshold || 
         metadata.height > CONFIG.resize.threshold ||
         metadata.width > maxDim ||
         metadata.height > maxDim;
}

// Helper function to calculate new dimensions
function calculateNewDimensions(width, height, filePath) {
  const isHeroImage = filePath.toLowerCase().includes('hero') || 
                     filePath.toLowerCase().includes('banner');
  const maxDim = isHeroImage ? CONFIG.resize.heroMaxDimension : CONFIG.maxDimension;
  
  if (width <= maxDim && height <= maxDim) {
    return { width, height };
  }
  
  const aspectRatio = width / height;
  
  if (width > height) {
    return {
      width: Math.min(width, maxDim),
      height: Math.round(Math.min(width, maxDim) / aspectRatio)
    };
  } else {
    return {
      width: Math.round(Math.min(height, maxDim) * aspectRatio),
      height: Math.min(height, maxDim)
    };
  }
}

// Helper function to format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log('🚀 Starting enhanced image compression and optimization...');
console.log('📁 Working directory:', process.cwd());
console.log('🔍 Pattern used:', `${INPUT_DIR}/**/*.{jpg,jpeg,png,webp}`);
console.log('⚙️  Configuration:', {
  maxDimension: CONFIG.maxDimension,
  maxFileSize: formatFileSize(CONFIG.maxFileSize),
  resizeThreshold: CONFIG.resize.threshold
});

const files = await globby([`${INPUT_DIR}/**/*.{jpg,jpeg,png,webp}`]);

console.log(`📸 Found ${files.length} images to process:`, files);

if (files.length === 0) {
  console.log('✨ No images to compress!');
  process.exit(0);
}

let totalOriginalSize = 0;
let totalCompressedSize = 0;
let processedCount = 0;
let skippedCount = 0;

for (const file of files) {
  const isWebP = file.toLowerCase().endsWith('.webp');
  const outputPath = isWebP ? file : file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const tempPath = isWebP ? `${file}.tmp` : outputPath;
  
  const originalSize = getFileSize(file);
  totalOriginalSize += originalSize;

  try {
    // Get image metadata
    const metadata = await sharp(file).metadata();
    console.log(`\n📋 Processing: ${file}`);
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${formatFileSize(originalSize)}`);

    // Check if processing is needed (resize or recompress)
    const needsResize = shouldResize(metadata, file);
    const needsRecompression = isWebP && (originalSize > CONFIG.maxFileSize || needsResize);
    
    // Skip if WebP file is already optimized
    if (isWebP && !needsResize && originalSize <= CONFIG.maxFileSize) {
      console.log(`   ⏭️  Skipping: WebP already optimized`);
      totalCompressedSize += originalSize; // Count as "compressed" size
      continue;
    }

    // Create sharp instance
    let sharpInstance = sharp(file);

    // Check if resizing is needed
    if (needsResize) {
      const newDimensions = calculateNewDimensions(metadata.width, metadata.height, file);
      sharpInstance = sharpInstance.resize(newDimensions.width, newDimensions.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   🔄 Resizing to: ${newDimensions.width}x${newDimensions.height}`);
    }

    // Determine quality based on original file size
    const quality = getQualityForSize(originalSize);
    console.log(`   🎛️  Using quality: ${quality}%`);

    // Apply WebP compression
    await sharpInstance
      .webp({ 
        quality,
        effort: 6, // Higher effort for better compression
        nearLossless: originalSize < 100 * 1024 // Use near-lossless for small files
      })
      .toFile(tempPath);

    // Get compressed file size
    const compressedSize = getFileSize(tempPath);
    totalCompressedSize += compressedSize;

    // Calculate compression ratio
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

    // Handle file replacement
    if (isWebP) {
      // For WebP files, replace the original with the optimized version
      fs.unlinkSync(file);
      fs.renameSync(tempPath, file);
      console.log(`   ✅ Optimized WebP: ${formatFileSize(originalSize)} → ${formatFileSize(compressedSize)} (${compressionRatio}% reduction)`);
    } else {
      // For other formats, remove original and keep the WebP
      fs.unlinkSync(file);
      console.log(`   ✅ Converted: ${formatFileSize(originalSize)} → ${formatFileSize(compressedSize)} (${compressionRatio}% reduction)`);
    }
    
    processedCount++;

  } catch (err) {
    console.warn(`   ❌ [SKIPPED] Failed to process "${file}":`, err.message);
    skippedCount++;
    
    // Clean up temporary files
    if (fs.existsSync(tempPath)) {
      try {
        fs.unlinkSync(tempPath);
      } catch (unlinkErr) {
        console.warn(`   ⚠️  Could not remove temporary file: ${tempPath}`);
      }
    }
    
    // If output file was partially created and different from input, remove it
    if (!isWebP && fs.existsSync(outputPath)) {
      try {
        fs.unlinkSync(outputPath);
      } catch (unlinkErr) {
        console.warn(`   ⚠️  Could not remove partial file: ${outputPath}`);
      }
    }
  }
}

// Final summary
console.log('\n🎉 Compression completed!');
console.log('📊 Summary:');
console.log(`   ✅ Processed: ${processedCount} files`);
console.log(`   ❌ Skipped: ${skippedCount} files`);
console.log(`   💾 Total size reduction: ${formatFileSize(totalOriginalSize)} → ${formatFileSize(totalCompressedSize)}`);

if (totalOriginalSize > 0) {
  const totalReduction = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`   📉 Overall compression: ${totalReduction}%`);
  console.log(`   💰 Space saved: ${formatFileSize(totalOriginalSize - totalCompressedSize)}`);
}
