import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Amber Cullen',
      position: 'CEO & Founder',
    },
    {
      name: 'Bernard Willow',
      position: 'Head of Marketing',
    },
    {
      name: 'Christine Nester',
      position: 'Operations Manager',
    },
    {
      name: 'David McKinsky',
      position: 'Lead Agent',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="h6 lg:h5 text-foreground mb-4">Meet Our Team</h2>
          <p className="tsm lg:tlg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of real estate professionals is here to guide you through every step
            of your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="h-80 lg:h-96 bg-gray-300 rounded-xl mb-4"></div>
              <div className="space-y-2">
                <h3 className="tsm lg:tlg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="txs lg:tsm text-muted-foreground">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
