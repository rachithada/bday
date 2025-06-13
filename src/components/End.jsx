import { useState, useEffect } from 'react';

export default function BirthdayEndingPage() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const fullMessage = "Bas yehi kehna tha…\n\nTu sabse alag hai, sabse pyari hai,\nAur tera b'day bhi special hona hi chahiye tha!\n\nToh jaa ab maze kar — cake kha, dance kar, aur doston ke sath dhamaka kar! 🥳\n\nAur haan… Bye bolna tough hai,\nPar itna yaad rakhna — tu bahut special hai 💖\n\nApna birthday full on enjoy kar… aur smile zaroor karna 😄";

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timer = setTimeout(() => {
        setCurrentText(prev => prev + fullMessage[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Typing speed

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      setTimeout(() => setShowFireworks(true), 1000);
    }
  }, [currentIndex, fullMessage]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Add custom styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(2deg); }
        66% { transform: translateY(-10px) rotate(-1deg); }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }
      
      @keyframes firework {
        0% { opacity: 1; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        100% { opacity: 0; transform: scale(1.5) rotate(360deg); }
      }
      
      @keyframes heartPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
      }
      
      @keyframes slideUp {
        from { transform: translateY(100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      .float-animation { animation: float 6s ease-in-out infinite; }
      .sparkle-animation { animation: sparkle 2s ease-in-out infinite; }
      .firework-animation { animation: firework 3s ease-out infinite; }
      .heart-pulse { animation: heartPulse 2s ease-in-out infinite; }
      .slide-up { animation: slideUp 1s ease-out forwards; }
      
      .typing-container {
        border-right: 3px solid transparent;
        padding-right: 5px;
      }
      
      .typing-cursor {
        border-right: 3px solid #ec4899;
        animation: blink 1s step-end infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: #ec4899; }
      }
      
      .gradient-text {
        background: linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4, #10b981);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 4s ease infinite;
      }
      
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index} className="mb-2">
        {line || <br />}
      </div>
    ));
  };

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-400/15 rounded-full blur-xl float-animation" style={{animationDelay: '6s'}}></div>

        {/* Sparkles */}
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 sparkle-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ⭐
          </div>
        ))}

        {/* Hearts floating */}
        {Array.from({length: 15}).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 heart-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 15 + 15}px`
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({length: 12}).map((_, i) => (
            <div
              key={i}
              className="absolute firework-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="text-4xl">🎆</div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          
          {/* Chat Bubble Container */}
          <div className="relative">
            {/* Sender Info */}
            <div className="flex items-center mb-6 slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💕</span>
              </div>
              <div className="ml-4">
                <div className="text-white font-semibold text-lg">Someone Special</div>
                <div className="text-gray-300 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  typing...
                </div>
              </div>
            </div>

            {/* Message Bubble */}
            <div className="relative bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-md border border-pink-300/20 rounded-3xl p-8 shadow-2xl slide-up">
              
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-75 animate-pulse"></div>
              
              <div className="relative">
                {/* Message Text with Typing Animation */}
                <div className={`text-white font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed ${showCursor ? 'typing-cursor' : ''}`}>
                  {formatMessage(currentText)}
                </div>

                {/* Typing Indicator */}
                {!isComplete && (
                  <div className="flex items-center mt-4 text-gray-400">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="ml-3 text-sm">typing...</span>
                  </div>
                )}

                {/* Message Timestamp */}
                <div className="text-right mt-6 text-gray-400 text-sm">
                  Just now ✓✓
                </div>
              </div>

              {/* Chat Bubble Tail */}
              <div className="absolute bottom-8 left-0 transform -translate-x-2">
                <div className="w-0 h-0 border-t-[20px] border-t-pink-500/20 border-r-[20px] border-r-transparent"></div>
              </div>
            </div>

            {/* Completion Effects */}
            {isComplete && (
              <div className="mt-12 text-center slide-up">
                
                {/* Celebration Icons */}
                <div className="flex justify-center items-center space-x-6 mb-8">
                  <div className="text-6xl animate-bounce">🎉</div>
                  <div className="text-5xl heart-pulse">💖</div>
                  <div className="text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>🎂</div>
                  <div className="text-5xl heart-pulse" style={{animationDelay: '1s'}}>✨</div>
                  <div className="text-6xl animate-bounce" style={{animationDelay: '1.5s'}}>🥳</div>
                </div>

                {/* Final Message */}
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-pink-300/30">
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                    Happy Birthday, Beautiful! 🎈
                  </h2>
                  <p className="text-white/90 text-lg">
                    Hope this message brought a smile to your face! 😄💕
                  </p>
                </div>

                {/* Dancing Emojis */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                  {['💃', '🕺', '🎊', '🎁', '🌟'].map((emoji, index) => (
                    <div
                      key={index}
                      className="text-4xl animate-bounce"
                      style={{animationDelay: `${index * 0.2}s`}}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-pink-500/20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
}