import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h2 className="text-apple-blue font-semibold tracking-widest text-sm md:text-base uppercase mb-4 animate-fade-in-up">
          Épinal (88) • Vosges
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 animate-fade-in-up animation-delay-100">
          D'click Studio.
        </h1>
        <p className="text-xl md:text-3xl text-gray-200 font-light mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Photographe professionnel & Laboratoire photo.
          <br />
          <span className="text-gray-400 text-lg md:text-xl mt-2 block">
            Shooting studio, reportages, tirages d'art et agrandissements géants.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          <a 
            href="#contact" 
            className="group bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Prendre Rendez-vous
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#studio" 
            className="text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all border border-white/30 backdrop-blur-sm"
          >
            Nos Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;