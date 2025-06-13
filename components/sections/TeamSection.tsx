import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Amber Cullen',
      position: 'CEO & Founder'
    },
    {
      name: 'Bernard Willow',
      position: 'Head of Marketing'
    },
    {
      name: 'Christine Nester',
      position: 'Operations Manager'
    },
    {
      name: 'David McKinsky',
      position: 'Lead Agent'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              The experts behind our success
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg lg:text-xl text-gray-500">
              Committed experts driven by a passion for turning your real estate dreams into reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="h-80 lg:h-96 bg-gray-300 rounded-xl mb-4"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base text-gray-400">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 