import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Quiz from './components/Quiz';
import Especialidades from './components/Especialidades';
import Depoimentos from './components/Depoimentos';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <Quiz />
        <Especialidades />
        <Depoimentos />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold">Dra. Lúcia Fernandes</h3>
            <p className="text-gray-300 text-sm">
              Psicóloga Clínica • CRP XX/XXXXX
            </p>
            <p className="text-gray-400 text-xs max-w-2xl mx-auto">
              Este site tem caráter informativo e não substitui uma consulta psicológica. 
              O sigilo profissional e a ética são pilares fundamentais do meu trabalho.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-xs">
                © 2024 Dra. Lúcia Fernandes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;