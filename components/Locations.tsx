import React from 'react';
import { SERVICE_AREAS } from '../constants';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zones d'Intervention</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Basés à Épinal, nous nous déplaçons dans toute la Lorraine et les régions limitrophes pour vos reportages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div key={area.region} className="p-6 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 transition-colors border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <h3 className="text-white font-semibold">{area.region}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pl-8">
                {area.cities}
              </p>
            </div>
          ))}
          <div className="p-6 rounded-2xl bg-neutral-900/50 flex items-center justify-center border border-white/5 border-dashed">
            <p className="text-gray-500 text-center italic">Et bien plus encore...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;