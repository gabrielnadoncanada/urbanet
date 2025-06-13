import React from 'react';

export default function CoreValuesSection() {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'We uphold honesty and transparency in every transaction.',
    },
    {
      title: 'Innovation',
      description: 'Leveraging technology to redefine real estate experiences.',
    },
    {
      title: 'Customer-Centric',
      description: 'Your needs are at the heart of everything we do.',
    },
    {
      title: 'Excellence',
      description: 'Committed to providing the highest standards of service.',
    },
    {
      title: 'Sustainability',
      description: 'Promoting eco-friendly practices within the real estate industry',
    },
  ];

  return (
    <section className="bg-white py-8 px-4 lg:py-[100px] lg:px-[50px]">
      <div className="max-w-8xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start lg:gap-[70px] mb-8 lg:mb-[50px]">
          <h2 className="h6 lg:h5 text-foreground">Our Core Values</h2>
          <p className="tsm lg:tlg text-muted-foreground lg:w-[615px] lg:flex-shrink-0">
            We are redefining real estate with innovation and excellence. By leveraging technology
            and market expertise
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[70px]">
          {/* Image */}
          <div className="lg:flex-1">
            <div className="w-full h-[250px] lg:h-full bg-[#CDD5E0] rounded-[12px] lg:min-h-[400px]"></div>
          </div>

          {/* Core Values List */}
          <div className="lg:w-[615px] lg:flex-shrink-0">
            <div className="flex flex-col gap-4 lg:gap-5">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 pb-4 lg:pb-5 border-b border-[#E3E8EF] last:border-b-0"
                >
                  <h3 className="tsm lg:tlg font-semibold text-foreground">{value.title}</h3>
                  <p className="txs lg:tsm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
