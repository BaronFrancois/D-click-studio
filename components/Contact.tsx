import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
              Parlons de votre projet.
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Mariage, portrait, tirage d'art ou développement. Notre studio est ouvert pour donner vie à vos images.
            </p>
            
            <div className="flex flex-col gap-6">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl">{CONTACT_INFO.phone}</span>
              </a>

              <a 
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl">22 Rue Saint Michel</span>
                  <span className="text-gray-500">88000 ÉPINAL</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 ml-auto" />
              </a>
            </div>
          </div>

          <div className="h-80 lg:h-auto rounded-3xl overflow-hidden bg-neutral-900 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.9876543210123!2d6.44!3d48.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793a65000000000%3A0x0000000000000000!2s22%20Rue%20Saint-Michel%2C%2088000%20%C3%89pinal!5e0!3m2!1sfr!2sfr!4v1600000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
              allowFullScreen 
              loading="lazy"
              title="Map"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full pointer-events-none">
              Épinal, Vosges
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} D'click Studio. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Mentions Légales</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;