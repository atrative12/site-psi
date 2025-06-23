import React from 'react';
import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    nome: "Maria Silva",
    texto: "Antes eu me sentia presa pela ansiedade, mas a Dra. Lúcia me ajudou a reencontrar a paz e a liberdade. Hoje consigo enfrentar os desafios com muito mais confiança.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    nome: "João Santos",
    texto: "O burnout estava consumindo minha vida. Através do acompanhamento, aprendi técnicas valiosas para gerenciar o estresse e recuperei o prazer de viver.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    nome: "Ana Costa",
    texto: "Depois de meses de tristeza profunda, encontrei na terapia um caminho para me reconectar comigo mesma. Hoje vejo a vida com outros olhos.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    nome: "Carlos Oliveira",
    texto: "A terapia me deu ferramentas para o autoconhecimento que mudaram completamente minha perspectiva. Recomendo de coração.",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  }
];

const Depoimentos = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Quem já experimentou a transformação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que meus pacientes dizem sobre sua jornada de cura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-200" size={32} />
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={depoimento.avatar}
                  alt={depoimento.nome}
                  className="w-16 h-16 rounded-full object-cover border-4 border-teal-100"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {depoimento.nome}
                  </h4>
                  <div className="flex space-x-1">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg italic">
                "{depoimento.texto}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-10 py-5 rounded-full font-semibold text-xl hover:from-teal-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agende Sua Transformação Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;