import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">L'Équipe</h2>
            <p className="text-gray-400">Des professionnels passionnés à votre service.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium text-sm">{member.role}</p>
                {member.subRole && (
                  <p className="text-gray-400 text-xs mt-1">{member.subRole}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;