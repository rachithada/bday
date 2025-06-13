import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Message() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const message = `Meri Motuu 💛 
  
Aaj tera din hai… aur sach bolu toh tujhe ek simple *Happy Birthday* bolna kaafi nahi lagta.

Tujhse dosti hona meri life ka ek **most special part** hai. Kabhi tu pagal ban jaati hai, kabhi samajhdar guru, kabhi meme queen, aur kabhi emotional support system.

Main har waqt tujhe irritate karta hoon, lekin sach mein — *I'm really lucky to have you.*

Tune hamesha bina judge kiye meri baatein suni, chahe main kitna bhi overthink karu ya chup ho jaaun. Tere saath har moment yaadgaar ban jaata hai.

**Haan tu gussa toh bahut karti hai 😤, lekin maan bhi jaati hai — isiliye toh tu special hai.** Lekin ek baat bolun? Jo past mein hua na… usse ab dil se nikaal de. **Har koi tujhe deserve nahi karta — aur tu un sab cheezon se zyada achhi hai.** **Tu best hai. Kabhi mat bhoolna. 💫**

Tu sirf meri dost nahi hai, tu meri **family jaisi** hai — thodi crazy, lekin sabse close. 💖

Aaj tujhe bas yeh yaad dilana tha — tu important hai, tu special hai, aur tu deserve karti hai **sab kuch best** is duniya mein.

Happy Birthday, Motuu! 🎉 Tera best friend hamesha tere saath hai — annoy karne ke liye bhi, aur support karne ke liye bhi. 😄

Love you… **as a friend, obviously.** 😜`;

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setShowHearts(true);
    }
  }, [currentIndex, message]);

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-300 font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-yellow-300 italic">$1</em>')
      .split('\n')
      .map((line, index) => (
        <p key={index} className="mb-4 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles - responsive sizes */}
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 sm:top-32 right-8 sm:right-20 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-purple-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 sm:bottom-40 right-4 sm:right-10 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-pink-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-1/4 left-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full opacity-80 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-200 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 sm:w-2 h-1 sm:h-2 bg-pink-200 rounded-full opacity-70 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-purple-200 rounded-full opacity-50 animate-ping" style={{animationDelay: '1.5s'}}></div>
        
        {/* Additional mobile-friendly decorative elements */}
        <div className="absolute top-1/2 left-2 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-3/4 right-2 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(window.innerWidth < 640 ? 8 : 15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-400 text-xl sm:text-2xl animate-bounce opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent animate-pulse mb-4">
              🎉 Happy Birthday 🎉
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Message Container */}
          <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-pink-300 border-opacity-30">
            <div className="text-white text-sm sm:text-base lg:text-lg font-serif leading-relaxed sm:leading-loose">
              {formatText(displayedText)}
              {currentIndex < message.length && (
                <span className="inline-block w-0.5 h-4 sm:h-5 lg:h-6 bg-pink-400 animate-pulse ml-1"></span>
              )}
            </div>
          </div>

          {/* Bottom decorative elements */}
          {showHearts && (
            <div className="text-center mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl animate-bounce">
                🎂🎈🎁
              </div>
              <p className="text-pink-300 text-lg sm:text-xl font-semibold animate-pulse px-2">
                Wishing you the most amazing day! 💫
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <Link to="/appreciate">
                      <button className="relative mb-5 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform hover:scale-110 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/50 border border-pink-400/30 hover:border-pink-300/60 overflow-hidden">
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