import React from 'react';

export default function GallerySection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Header with horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 gap-6 lg:gap-16">
          <h2 className="h6 lg:h5 text-gray-900">Explore Our World</h2>
          <p className="tsm lg:tlg text-gray-500 max-w-xl lg:max-w-2xl">
            Step into the world of Urbanet, where exceptional living spaces meet modern luxury and
            convenience.
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
