import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="studio" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Expertise Complète</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Un savoir-faire unique réunissant la créativité du studio et la technicité d'un laboratoire professionnel à Épinal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {SERVICES.map((service, idx) => (
            <div 
              id={idx === 1 ? "labo" : "studio"}
              key={service.title} 
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 p-8 md:p-12 border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-apple-blue/10 rounded-2xl mb-6">
                  <service.icon className="text-apple-blue w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-apple-blue mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {idx === 1 && (
                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-apple-blue font-semibold">Le + D'click :</span> Réalisation d'agrandissements géants grâce à notre traceur (1m de large) et borne de sélection pour tirages immédiats.
                    </p>
                  </div>
                )}
                {idx === 0 && (
                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-apple-blue font-semibold">Mobilité :</span> Notre équipe se déplace sur toute la Lorraine (Vosges, Moselle, Meurthe-et-Moselle...) et au-delà.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;