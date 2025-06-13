import React from 'react';

export default function AboutStatsSection() {
  const stats = [
    { number: '10K', suffix: '+', label: 'Properties Listed' },
    { number: '5K', suffix: '+', label: 'Happy Clients Served' },
    { number: '100', suffix: '+', label: 'Professional Agents' },
    { number: '95', suffix: '%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight ">
              Shaping the Future of Real Estate With Innovation
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg lg:text-xl text-gray-500">
              We are redefining real estate with innovation and excellence. By leveraging technology and market expertise, we make buying, selling, and renting seamless.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-200 mb-12 lg:mb-16" />
        
        <div className="grid grid-cols-2 md:flex justify-between gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl lg:text-6xl font-semibold text-gray-900">
                  {stat.number}
                </span>
                <span className="text-2xl lg:text-3xl font-semibold text-gray-900">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-base lg:text-xl text-gray-500 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 