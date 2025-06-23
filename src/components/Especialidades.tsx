import React from 'react';
import { Brain, Heart, Shield, Sparkles } from 'lucide-react';

const especialidades = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Técnicas e acolhimento para lidar com preocupações excessivas, pânico e medos que limitam sua vida.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Estresse",
    description: "Estratégias para gerenciar a pressão do dia a dia, Burnout e encontrar mais calma em sua rotina.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Um caminho de suporte para resgatar a alegria de viver, superar a tristeza persistente e reencontrar a motivação.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Juntos, vamos explorar seus potenciais, fortalecer sua autoestima e construir uma vida com mais propósito.",
    color: "from-purple-500 to-purple-600"
  }
];

const Especialidades = () => {
  return (
    <section id="especialidades" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Como posso te ajudar?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Minhas áreas de especialização para seu bem-estar emocional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {especialidades.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8 group"
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="hidden sm:inline">Saiba Mais sobre as Terapias</span>
            <span className="sm:hidden">Saiba Mais</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;