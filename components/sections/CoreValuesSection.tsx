import React from 'react';

export default function CoreValuesSection() {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'We uphold honesty and transparency in every transaction.'
    },
    {
      title: 'Innovation',
      description: 'Leveraging technology to redefine real estate experiences.'
    },
    {
      title: 'Customer-Centric',
      description: 'Your needs are at the heart of everything we do.'
    },
    {
      title: 'Excellence',
      description: 'Committed to providing the highest standards of service.'
    },
    {
      title: 'Sustainability',
      description: 'Promoting eco-friendly practices within the real estate industry'
    }
  ];

  return (
    <section className="bg-white py-[32px] px-[16px] lg:py-[100px] lg:px-[50px]">
      <div className="max-w-8xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col gap-[16px] lg:flex-row lg:justify-between lg:items-start lg:gap-[70px] mb-[32px] lg:mb-[50px]">
          <h2 className="text-[32px] lg:text-[48px] font-semibold text-[#18181B] leading-[1.25] lg:leading-[1.21] tracking-[-0.02em] ">
            Our Core Values
          </h2>
          <p className="text-[16px] lg:text-[20px] font-normal lg:font-light text-[#677489] leading-[1.625] lg:leading-[1.5] lg:w-[615px] lg:flex-shrink-0">
            We are redefining real estate with innovation and excellence. By leveraging technology and market expertise
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col gap-[32px] lg:flex-row lg:gap-[70px]">
          {/* Image */}
          <div className="lg:flex-1">
            <div className="w-full h-[250px] lg:h-full bg-[#CDD5E0] rounded-[12px] lg:min-h-[400px]"></div>
          </div>
          
          {/* Core Values List */}
          <div className="lg:w-[615px] lg:flex-shrink-0">
            <div className="flex flex-col gap-[16px] lg:gap-[20px]">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="flex flex-col gap-[8px] pb-[16px] lg:pb-[20px] border-b border-[#E3E8EF] last:border-b-0"
                >
                  <h3 className="text-[16px] lg:text-[20px] font-semibold text-[#18181B] leading-[1.21] lg:leading-[1.5]">
                    {value.title}
                  </h3>
                  <p className="text-[14px] lg:text-[18px] font-normal text-[#677489] leading-[1.57] lg:leading-[1.44]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 