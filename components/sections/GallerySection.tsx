import React from 'react';

export default function GallerySection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Header with horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 gap-6 lg:gap-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
            Explore Our World
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-light leading-relaxed max-w-xl lg:max-w-2xl">
            Step into the world of Urbanet, where exceptional living spaces meet modern luxury and convenience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Two Stacked Images */}
          <div className="flex flex-col justify-between gap-6">
            <div className="h-64 lg:h-96 bg-gray-300 rounded-xl"></div>
            <div className="h-64 lg:h-96 bg-gray-300 rounded-xl"></div>
          </div>
          
          {/* Right Column - Large Image */}
          <div className="h-64 lg:h-[800px] bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
} 