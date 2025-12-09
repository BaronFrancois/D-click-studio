import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-blue-400 font-medium tracking-widest text-sm md:text-base uppercase mb-4 animate-fade-in-up">
          Épinal • Vosges
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 animate-fade-in-up animation-delay-100">
          Capturer l'instant.
          <br />
          <span className="text-gray-400">Sublimer le souvenir.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Photographe professionnel & Laboratoire photo.
          <br />
          L'excellence de l'image, de la prise de vue au tirage d'art.
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
            Découvrir le Studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;