import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Appreciate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const messages = [
    "Jab bhi mujhe zarurat hoti hai, tu hamesha saath hoti hai ❤️",
    "Tere saath boring din bhi fun ban jaate hain 🌈",
    "Tu kabhi judge nahi karti — sirf vibe karti hai 🤝",
    "Tu meri sabse badi hype machine hai 🔥",
    "Tu wo insan hai jisse main sabse pehle apni baat share karta hoon 🤫",
    "Tune hamesha mujhe sahi decision lene mein madad ki hai 🧠",
    "Hamari yaadein meri life ke best moments hain 📸",
    "Tu sach bolti hai, chahe wo sunna mushkil ho 🪞",
    "Jab main khud pe doubt karta hoon, tu mujhe support karti hai 🛡️",
    "Tu bas... irreplaceable hai. . 🫶"
  ];

  const gradients = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-purple-500 to-pink-500',
    'from-green-500 via-teal-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-teal-500 via-cyan-500 to-blue-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-purple-600 via-blue-500 to-teal-500',
    'from-pink-600 via-purple-500 to-indigo-500'
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % messages.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + messages.length) % messages.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
            ✨ What I Appreciate About You ✨
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white opacity-70">
            <span className="text-sm sm:text-base">{currentSlide + 1}</span>
            <div className="flex space-x-1">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-pink-400 scale-125' : 'bg-white opacity-30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm sm:text-base">{messages.length}</span>
          </div>
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="relative h-80 sm:h-96 perspective-1000">
            <div
              className={`absolute inset-0 transition-all duration-500 transform ${
                isAnimating ? 'rotate-y-90 opacity-0' : 'rotate-y-0 opacity-100'
              }`}
            >
              {/* Card */}
              <div className={`h-full w-full bg-gradient-to-br ${gradients[currentSlide]} rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-shimmer"></div>
                
                {/* Card content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                  <div className="absolute top-4 right-4 text-2xl sm:text-3xl opacity-20 font-bold text-white">
                    {(currentSlide + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed drop-shadow-lg">
                      {messages[currentSlide]}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"
                          style={{animationDelay: `${i * 0.2}s`}}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-12">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 rounded-full p-3 sm:p-4 shadow-lg transform hover:scale-110 transition-all duration-200 disabled:hover:scale-100"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 disabled:hover:scale-100 text-sm sm:text-base"
            >
              {currentSlide === messages.length - 1 ? (
                <span className="flex items-center space-x-2">
                  <span>Complete</span>
                  <span className="text-lg">💖</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <span>Next</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 rounded-full p-3 sm:p-4 shadow-lg transform hover:scale-110 transition-all duration-200 disabled:hover:scale-100"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-sm">
          <div className="bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / messages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>

        <Link to="/cake">
                              <button className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform hover:scale-110 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/50 border border-pink-400/30 hover:border-pink-300/60 overflow-hidden">
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                                
                                <span className="relative flex items-center space-x-2">
                                  <span className="text-lg tracking-wide group-hover:animate-pulse">Next</span>
                                  <span className="text-xl animate-bounce group-hover:animate-spin">✨</span>
                                </span>
                              </button>
                    </Link>
    
    </div>
  );
}