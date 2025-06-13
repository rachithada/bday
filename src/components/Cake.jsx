import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BirthdayPage = () => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Confetti function - explodes from center outward
  const triggerConfetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#ff9ff3', '#54a0ff'];
    const confettiCount = 200;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < confettiCount; i++) {
      createConfettiPiece(colors[Math.floor(Math.random() * colors.length)], centerX, centerY);
    }
  };

  const createConfettiPiece = (color, startX, startY) => {
    const confetti = document.createElement('div');
    const size = Math.random() * 8 + 4;
    const shape = Math.random();
    
    confetti.style.position = 'fixed';
    confetti.style.left = startX + 'px';
    confetti.style.top = startY + 'px';
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.backgroundColor = color;
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    // Different shapes for variety
    if (shape > 0.7) {
      confetti.style.borderRadius = '50%'; // Circle
    } else if (shape > 0.4) {
      confetti.style.transform = 'rotate(45deg)'; // Diamond
    } else {
      confetti.style.borderRadius = '2px'; // Square
    }
    
    document.body.appendChild(confetti);
    
    // Random explosion direction and speed
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 15 + 8;
    const gravity = 0.5;
    const airResistance = 0.99;
    
    let velocityX = Math.cos(angle) * velocity;
    let velocityY = Math.sin(angle) * velocity;
    let posX = startX;
    let posY = startY;
    let rotation = 0;
    let rotationSpeed = (Math.random() - 0.5) * 20;
    let opacity = 1;
    let scale = 1;
    
    const animateConfetti = () => {
      // Apply physics
      velocityY += gravity;
      velocityX *= airResistance;
      velocityY *= airResistance;
      
      posX += velocityX;
      posY += velocityY;
      rotation += rotationSpeed;
      
      // Fade out over time
      opacity -= 0.008;
      scale = Math.max(0, scale - 0.005);
      
      confetti.style.left = posX + 'px';
      confetti.style.top = posY + 'px';
      confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      confetti.style.opacity = opacity;
      
      // Remove when off-screen or faded
      if (opacity > 0 && posY < window.innerHeight + 100 && posX > -100 && posX < window.innerWidth + 100) {
        requestAnimationFrame(animateConfetti);
      } else {
        if (document.body.contains(confetti)) {
          document.body.removeChild(confetti);
        }
      }
    };
    
    requestAnimationFrame(animateConfetti);
  };

  const blowCandle = () => {
    setCandleBlown(true);
    setShowMessage(true);
    
    // Play Happy Birthday audio
    const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav');
    audio.volume = 0.5;
    audio.play().catch((error) => {
      console.log('Audio autoplay blocked or failed:', error);
      // Create a simple audio beep as fallback
      playBeepSound();
    });
    
    // Trigger confetti
    setTimeout(() => {
      triggerConfetti();
    }, 500);
  };

  // Fallback audio using Web Audio API
  const playBeepSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Play a celebratory melody
      const notes = [523.25, 587.33, 659.25, 698.46, 783.99]; // C5, D5, E5, F5, G5
      let noteIndex = 0;
      
      const playNote = () => {
        if (noteIndex < notes.length) {
          oscillator.frequency.setValueAtTime(notes[noteIndex], audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
          
          noteIndex++;
          setTimeout(playNote, 200);
        }
      };
      
      oscillator.start();
      playNote();
      
      setTimeout(() => {
        oscillator.stop();
      }, 1500);
    } catch (error) {
      console.log('Web Audio API not supported');
    }
  };

  const resetCelebration = () => {
    setCandleBlown(false);
    setShowMessage(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Magical floating elements - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant balloon clusters - Mobile friendly */}
        <div className="absolute top-4 sm:top-8 left-2 sm:left-8 flex flex-col space-y-1 sm:space-y-2 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <div className="text-2xl sm:text-4xl">🎈</div>
          <div className="text-xl sm:text-3xl ml-1 sm:ml-2">🎈</div>
        </div>
        
        <div className="absolute top-6 sm:top-12 right-2 sm:right-12 flex flex-col space-y-1 sm:space-y-2 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
          <div className="text-3xl sm:text-5xl">🎈</div>
          <div className="text-xl sm:text-3xl mr-1 sm:mr-2">🎈</div>
        </div>
        
        <div className="absolute bottom-8 sm:bottom-16 left-2 sm:left-16 flex space-x-1 sm:space-x-2 animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}>
          <div className="text-2xl sm:text-4xl">🎈</div>
          <div className="text-xl sm:text-3xl">🎈</div>
        </div>
        
        <div className="absolute bottom-12 sm:bottom-20 right-2 sm:right-20 flex space-x-1 sm:space-x-2 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.2s'}}>
          <div className="text-2xl sm:text-4xl">🎈</div>
          <div className="text-3xl sm:text-5xl">🎈</div>
        </div>
        
        {/* Gentle floating decorations - Hidden on very small screens */}
        <div className="hidden sm:block absolute top-1/4 left-4 sm:left-12 text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '1.5s'}}>🎁</div>
        <div className="hidden sm:block absolute top-1/3 right-4 sm:right-16 text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '2.5s'}}>🎁</div>
        <div className="hidden sm:block absolute bottom-1/3 left-6 sm:left-20 text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '0.8s'}}>✨</div>
        <div className="hidden sm:block absolute bottom-1/4 right-6 sm:right-24 text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '1.8s'}}>✨</div>
      </div>

      {/* Beautiful Happy Birthday Message - Fully Responsive */}
      {showMessage && (
        <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 text-center z-30 animate-fade-in w-full px-2 sm:px-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 shadow-2xl border border-white/30 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 mb-2 sm:mb-3 animate-pulse leading-tight">
              🎉 Happy Birthday 🎉
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce leading-tight">
              ✨ Motuu! ✨
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-purple-700 font-medium mt-2 sm:mt-4 animate-pulse">
              Your special day is here! 🌟
            </p>
          </div>
        </div>
      )}

      {/* Elegant cake container - Responsive */}
      <div className="relative z-10 flex flex-col items-center mt-4 sm:mt-8">
        {/* Beautiful layered cake - Scalable */}
        <div className="relative mb-4 sm:mb-8 drop-shadow-2xl">
          {/* Cake base - Responsive sizing */}
          <div className="relative">
            {/* Bottom layer */}
            <div className="w-64 sm:w-72 md:w-80 h-16 sm:h-18 md:h-20 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-2xl relative overflow-hidden border-2 sm:border-4 border-pink-200">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-pink-300/50 rounded-full"></div>
              {/* Decorative elements */}
              <div className="absolute top-1 sm:top-2 left-8 sm:left-12 w-2 sm:w-3 h-2 sm:h-3 bg-red-400 rounded-full shadow-lg"></div>
              <div className="absolute top-2 sm:top-3 right-12 sm:right-16 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1 sm:bottom-2 left-16 sm:left-20 w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-2 sm:bottom-3 right-8 sm:right-12 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full shadow-lg"></div>
              <div className="absolute top-1 left-1/2 w-1 sm:w-2 h-1 sm:h-2 bg-purple-400 rounded-full shadow-lg"></div>
            </div>
            
            {/* Middle layer */}
            <div className="absolute -top-3 sm:-top-4 left-8 sm:left-12 w-48 sm:w-52 md:w-56 h-12 sm:h-14 md:h-16 bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400 rounded-full shadow-xl border-2 sm:border-4 border-yellow-100">
              <div className="absolute top-1 left-6 sm:left-8 w-1 sm:w-2 h-1 sm:h-2 bg-pink-400 rounded-full shadow-lg"></div>
              <div className="absolute top-1 sm:top-2 right-8 sm:right-10 w-1 sm:w-2 h-1 sm:h-2 bg-purple-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1 left-12 sm:left-16 w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1 sm:bottom-2 right-4 sm:right-6 w-1 sm:w-2 h-1 sm:h-2 bg-red-400 rounded-full shadow-lg"></div>
            </div>
            
            {/* Top layer */}
            <div className="absolute -top-4 sm:-top-6 left-16 sm:left-20 md:left-24 w-32 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 rounded-full shadow-lg border-2 sm:border-4 border-purple-100">
              <div className="absolute top-1 left-4 sm:left-6 w-1 h-1 bg-red-400 rounded-full shadow-lg"></div>
              <div className="absolute top-1 right-6 sm:right-8 w-1 h-1 bg-yellow-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1 left-8 sm:left-12 w-1 h-1 bg-green-400 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Elegant candle - Responsive */}
          <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            {/* Candle stick */}
            <div className="w-3 sm:w-4 h-6 sm:h-8 bg-gradient-to-b from-red-300 to-red-500 rounded-sm shadow-lg border border-red-200"></div>
            
            {/* Candle flame with glow */}
            <div className={`transition-all duration-1000 ${candleBlown ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
              <div className="relative -mt-1">
                <div className="text-xl sm:text-2xl md:text-3xl animate-pulse">🔥</div>
                <div className="absolute inset-0 bg-orange-300 rounded-full blur-md animate-ping opacity-60"></div>
                <div className="absolute inset-0 bg-yellow-200 rounded-full blur-lg animate-pulse opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant action button - Responsive */}
        <button
          onClick={candleBlown ? resetCelebration : blowCandle}
          className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-2xl border-2 w-full max-w-xs sm:max-w-sm md:max-w-md mx-4 ${
            candleBlown 
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white border-emerald-300 hover:shadow-emerald-400/50' 
              : 'bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white border-rose-300 hover:shadow-rose-400/50'
          }`}
        >
          <span className="block sm:hidden">
            {candleBlown ? '🕯️ Light Again!' : '💨 Make a Wish!'}
          </span>
          <span className="hidden sm:block">
            {candleBlown ? '🕯️ Light the Magic Again!' : '💨 Make a Wish & Blow!'}
          </span>
        </button>

        {/* Gentle instruction text - Responsive */}
        <div className="mt-4 sm:mt-6 text-center max-w-xs sm:max-w-md px-4">
          <p className="text-sm sm:text-base md:text-lg text-purple-700 font-medium">
            🌟 {candleBlown ? 'The magic lives on...' : 'Close your eyes, make a wish...'} 🌟
          </p>
        </div>
      </div>

      {/* Audio elements */}
      <audio id="birthdayAudio" preload="auto">
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        <source src="https://actions.google.com/sounds/v1/celebrations/birthday_party_cheer.ogg" type="audio/ogg" />
        <source src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/cartoon_success_fanfair.mp3" type="audio/mpeg" />
      </audio>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>

        <Link to="/end">
            <button className="relative mt-10 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform hover:scale-110 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/50 border border-pink-400/30 hover:border-pink-300/60 overflow-hidden">
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
};

export default BirthdayPage;