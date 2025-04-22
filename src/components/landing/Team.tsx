import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

type TeamProps = {
  title: string;
  subtitle: string;
  members: TeamMember[];
};

export default function Team({ title, subtitle, members }: TeamProps) {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.imageUrl || `/placeholder-person.jpg`} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
