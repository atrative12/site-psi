import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, MessageCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { value: number; text: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Nos últimos dias, você tem se sentido excessivamente preocupado(a) ou com uma tensão interna que parece não ter fim?",
    options: [
      { value: 3, text: "Sim, quase todos os dias." },
      { value: 2, text: "Às vezes, dependendo da situação." },
      { value: 1, text: "Raramente ou nunca." }
    ]
  },
  {
    id: 2,
    question: "Você tem tido dificuldades para dormir, manter o sono, ou acorda sentindo-se cansado(a), mesmo após muitas horas na cama?",
    options: [
      { value: 3, text: "Sim, é uma luta constante." },
      { value: 2, text: "De vez em quando, em períodos de mais estresse." },
      { value: 1, text: "Não, meu sono é geralmente bom." }
    ]
  },
  {
    id: 3,
    question: "Você tem percebido uma perda de interesse em atividades que antes te davam prazer, ou uma sensação de tristeza e desânimo que persiste por vários dias?",
    options: [
      { value: 3, text: "Sim, sinto isso com frequência." },
      { value: 2, text: "Às vezes, em momentos específicos." },
      { value: 1, text: "Não, consigo manter meu interesse e ânimo." }
    ]
  },
  {
    id: 4,
    question: "Em situações de pressão ou desafios, você se sente sobrecarregado(a), irritado(a) ou tem dificuldade em encontrar soluções?",
    options: [
      { value: 3, text: "Sim, me sinto assim na maioria das vezes." },
      { value: 2, text: "Ocasionalmente, quando as coisas apertam." },
      { value: 1, text: "Não, consigo lidar bem com a pressão." }
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleAnswerSelect = (value: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
        setShowContactForm(true);
      }
    }, 500);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const averageScore = totalScore / questions.length;
    return averageScore >= 2.5;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setShowContactForm(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Acabei de fazer o quiz no seu site e gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const needsSupport = showResult ? calculateResult() : false;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="quiz" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Como está a sua Mente Hoje?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra e Dê o Primeiro Passo para o Bem-Estar
          </p>
          <p className="text-base sm:text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Responda a estas perguntas rápidas para refletir sobre seus sentimentos 
            e entender melhor suas necessidades.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswerSelect(option.value)}
                      className={`w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 text-left transition-all duration-300 hover:border-teal-300 hover:bg-teal-50/50 hover:shadow-md transform hover:scale-105 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-teal-500 bg-teal-50 shadow-md'
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      <span className="text-base sm:text-lg text-gray-700 font-medium">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 sm:mt-12">
                <button
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <button
                  onClick={resetQuiz}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300"
                >
                  Recomeçar
                </button>
              </div>
            </>
          ) : (
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {needsSupport ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Suas respostas indicam que você merece cuidado especial
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Suas respostas indicam que você pode estar passando por momentos de desafio 
                      com sua saúde mental. É compreensível e você não está sozinho(a). Cuidar da 
                      sua mente é o primeiro passo para o bem-estar. Se você sente que a ansiedade, 
                      o estresse ou a tristeza têm impactado sua vida, estou aqui para te oferecer 
                      um espaço seguro e acolhedor para juntos explorarmos caminhos para uma vida 
                      mais equilibrada e feliz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <button
                        onClick={openWhatsApp}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <MessageCircle size={20} />
                        <span className="hidden sm:inline">Conversar no WhatsApp</span>
                        <span className="sm:hidden">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span className="hidden sm:inline">Agendar Sessão Online</span>
                        <span className="sm:hidden">Agendar Sessão</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Que bom! Você está mantendo um bom equilíbrio
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Suas respostas sugerem que você está mantendo um bom equilíbrio emocional. 
                      Lembre-se que o autocuidado é contínuo e a terapia pode ser uma ferramenta 
                      valiosa para o autoconhecimento e prevenção. Mantenha-se atento(a) ao seu bem-estar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <button
                        onClick={openWhatsApp}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <MessageCircle size={20} />
                        <span className="hidden sm:inline">Conversar no WhatsApp</span>
                        <span className="sm:hidden">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-teal-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span className="hidden sm:inline">Conhecer Mais sobre o Atendimento</span>
                        <span className="sm:hidden">Conhecer Atendimento</span>
                      </button>
                    </div>
                  </>
                )}
                
                <button
                  onClick={resetQuiz}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300 block mx-auto mt-4"
                >
                  Refazer o Quiz
                </button>
              </div>
            </div>
          )}
        </div>

        {showContactForm && (
          <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Vamos conversar?
              </h3>
              <p className="text-gray-600">
                Deixe seus dados e entrarei em contato em breve
              </p>
            </div>
            
            <form className="max-w-md mx-auto space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Dados
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;