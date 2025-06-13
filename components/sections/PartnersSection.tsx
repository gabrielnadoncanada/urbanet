import React from 'react';

export default function PartnersSection() {
  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24">
          {[1, 2, 3, 4, 5].map((partner) => (
            <div key={partner} className="w-32 lg:w-48 h-8 lg:lg:h-10 bg-gray-400 rounded"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
