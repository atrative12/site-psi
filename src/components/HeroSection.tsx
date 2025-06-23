import React from 'react';

const HeroSection = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with new image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50" 
           style={{
             backgroundImage: `url('https://i.imgur.com/T3gCRpr.png')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             opacity: 0.1
           }}>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Sua jornada para o
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  equilíbrio emocional
                </span>
                começa aqui
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                Um espaço seguro para florescer
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Especializada em ansiedade, estresse e depressão, ofereço um ambiente acolhedor 
                onde você pode explorar seus sentimentos e encontrar caminhos para uma vida mais equilibrada.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToQuiz}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Avaliar Meu Bem-Estar
              </button>
              
              <button
                onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-teal-400 hover:text-teal-600 transition-all duration-300"
              >
                <span className="hidden sm:inline">Conhecer Especialidades</span>
                <span className="sm:hidden">Especialidades</span>
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-3xl transform rotate-6"></div>
              <img
                src="https://i.imgur.com/xLD68pO.png"
                alt="Dra. Lúcia Fernandes - Psicóloga Clínica"
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Pessoas Atendidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;