import 'tailwindcss'
import { Link } from 'react-router-dom';


export default function WelcomeScreen() {
  const stars = Array.from({ length: 30 });

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-[#0b0c2a] via-[#1a1b3a] to-[#0f0d35] overflow-hidden">
      {/* ⭐ Stars in Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {stars.map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <span
              key={i}
              className="star-class"
              style={{ top: `${top}%`, left: `${left}%` }}
            ></span>
          );
        })}
      </div>

      {/* Magical glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Decorative elements around title with enhanced animations */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping hover:animate-bounce cursor-pointer"></div>
          <div className="absolute -top-4 -right-12 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-300 hover:animate-spin cursor-pointer"></div>
          <div className="absolute -bottom-6 -left-12 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-700 hover:animate-pulse cursor-pointer"></div>
          <div className="absolute -bottom-4 -right-8 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-1000 hover:animate-bounce cursor-pointer"></div>
          
          {/* Rotating ring around title */}
          <div className="absolute -inset-16 border border-pink-200/20 rounded-full animate-spin pointer-events-none" style={{animationDuration: '20s'}}></div>
          <div className="absolute -inset-20 border border-purple-200/10 rounded-full animate-spin pointer-events-none" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
          
          <h1
            className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-300 cursor-default"
            style={{ 
              textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(236,72,153,0.3), 0 0 60px rgba(168,85,247,0.2)',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
            }}
          >
            Hey Yahsu💗
          </h1>
        </div>
        
        <div className="mt-6 relative">
          <p className="text-lg md:text-xl text-gray-200 text-center leading-relaxed tracking-wide font-light">
<span className="inline-block animate-bounce delay-100">I</span>
<span className="inline-block animate-bounce delay-200">'</span>
<span className="inline-block animate-bounce delay-300">v</span>
<span className="inline-block animate-bounce delay-400">e</span>
{" "}
<span className="inline-block animate-bounce delay-600">m</span>
<span className="inline-block animate-bounce delay-700">a</span>
<span className="inline-block animate-bounce delay-800">d</span>
<span className="inline-block animate-bounce delay-900">e</span>
{" "}
<span className="inline-block animate-bounce delay-1100">s</span>
<span className="inline-block animate-bounce delay-1200">o</span>
<span className="inline-block animate-bounce delay-1300">m</span>
<span className="inline-block animate-bounce delay-1400">e</span>
<span className="inline-block animate-bounce delay-1500">t</span>
<span className="inline-block animate-bounce delay-1600">h</span>
<span className="inline-block animate-bounce delay-1700">i</span>
<span className="inline-block animate-bounce delay-1800">n</span>
<span className="inline-block animate-bounce delay-1900">g</span>
{" "}
<span className="inline-block animate-bounce delay-2100">j</span>
<span className="inline-block animate-bounce delay-2200">u</span>
<span className="inline-block animate-bounce delay-2300">s</span>
<span className="inline-block animate-bounce delay-2400">t</span>
{" "}
<span className="inline-block animate-bounce delay-2600">f</span>
<span className="inline-block animate-bounce delay-2700">o</span>
<span className="inline-block animate-bounce delay-2800">r</span>
{" "}
<span className="inline-block animate-bounce delay-3000">y</span>
<span className="inline-block animate-bounce delay-3100">o</span>
<span className="inline-block animate-bounce delay-3200">u</span>
{" "}
<span className="inline-block animate-bounce delay-3400">.</span>
<span className="inline-block animate-bounce delay-3500">.</span>
<span className="inline-block animate-bounce delay-3600">.</span>
<span className="inline-block animate-bounce delay-3700">.</span>

          </p>
        </div>
        
        <div className="mt-12 relative group">
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          
          {/* Hover tooltip */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out scale-95 group-hover:scale-100 pointer-events-none">
            <div className="text-sm font-medium">Ready for the magic? 💫</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
          </div>
          
          <Link to="/greeting">
          <button className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform hover:scale-110 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/50 border border-pink-400/30 hover:border-pink-300/60 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            <span className="relative flex items-center space-x-2">
              <span className="text-lg tracking-wide group-hover:animate-pulse">Tap to begin</span>
              <span className="text-xl animate-bounce group-hover:animate-spin">✨</span>
            </span>
          </button>
          </Link>
        </div>

        {/* Floating hearts with enhanced animations */}
        <div className="absolute top-20 left-10 text-pink-300 text-2xl animate-bounce opacity-60 hover:scale-150 transition-transform cursor-pointer">💕</div>
        <div className="absolute top-32 right-16 text-purple-300 text-xl animate-bounce delay-500 opacity-50 hover:scale-150 transition-transform cursor-pointer">💜</div>
        <div className="absolute bottom-32 left-20 text-pink-200 text-lg animate-bounce delay-1000 opacity-40 hover:scale-150 transition-transform cursor-pointer">💖</div>
        <div className="absolute bottom-20 right-12 text-purple-200 text-2xl animate-bounce delay-1500 opacity-60 hover:scale-150 transition-transform cursor-pointer">💝</div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/4 text-yellow-200 text-sm animate-ping opacity-30">⭐</div>
        <div className="absolute top-2/3 right-1/3 text-blue-200 text-sm animate-ping delay-700 opacity-30">✨</div>
        <div className="absolute top-1/2 left-1/6 text-pink-200 text-xs animate-ping delay-1000 opacity-25">🌟</div>
        <div className="absolute bottom-1/3 right-1/5 text-purple-200 text-sm animate-ping delay-1300 opacity-30">💫</div>
        
        {/* Orbiting elements around the title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-spin origin-bottom" style={{animationDuration: '8s', transformOrigin: '0 12rem'}}>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-spin origin-bottom" style={{animationDuration: '12s', animationDirection: 'reverse', transformOrigin: '0 10rem'}}>
            <div className="w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-500"></div>
          </div>
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-spin origin-bottom" style={{animationDuration: '15s', transformOrigin: '0 14rem'}}>
            <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}