import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigada pelo seu contato! Entrarei em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Vamos Começar Sua Jornada?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato e dê o primeiro passo para uma vida mais equilibrada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">E-mail</p>
                    <p className="text-gray-600">contato@luciafernandes.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Localização</p>
                    <p className="text-gray-600">Atendimento Online e Presencial<br />São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Horário de Atendimento</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Primeira Consulta Gratuita
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Conheça meu trabalho sem compromisso. Agende uma conversa inicial 
                de 30 minutos totalmente gratuita.
              </p>
              <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Agendar Consulta Gratuita
              </button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (WhatsApp)
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Conte um pouco sobre o que você gostaria de trabalhar..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Conecte-se comigo nas redes sociais
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;