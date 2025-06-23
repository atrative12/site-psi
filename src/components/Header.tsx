import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Dra. Lúcia Fernandes
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
              Psicóloga Clínica
            </p>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>contato@luciafernandes.com</span>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:from-blue-500 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ml-2 lg:ml-4"
          >
            <span className="hidden sm:inline">Agendar Consulta</span>
            <span className="sm:hidden">Agendar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;