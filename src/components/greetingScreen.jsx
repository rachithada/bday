import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

export default function GreetingScreen() {
{/* Pushes slider out of view initially */}

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const sliderRef = useRef(null);

  // Placeholder images - replace with your actual image URLs
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageTransition(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setImageTransition(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll detection for slider
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setSliderVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToImage = (index) => {
    if (index !== currentImageIndex) {
      setImageTransition(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setImageTransition(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen w-screen relative bg-gradient-to-br from-[#0b0c2a] via-[#1a1b3a] to-[#0f0d35] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-10 text-pink-300 text-2xl animate-bounce opacity-60">💕</div>
      <div className="absolute top-24 right-16 text-purple-300 text-xl animate-bounce delay-500 opacity-50">💜</div>
      <div className="absolute bottom-20 left-16 text-pink-200 text-lg animate-bounce delay-1000 opacity-40">💖</div>
      <div className="absolute bottom-32 right-12 text-purple-200 text-2xl animate-bounce delay-1500 opacity-60">🎁</div>

      {/* Twinkling Stars */}
      <div className="absolute top-32 left-1/4 text-yellow-200 text-sm animate-ping opacity-30">⭐</div>
      <div className="absolute top-2/3 right-1/3 text-blue-200 text-sm animate-ping delay-700 opacity-30">✨</div>
      <div className="absolute top-1/3 right-1/4 text-pink-200 text-xs animate-ping delay-1300 opacity-25">🌟</div>

      {/* Main Content */}
      <div className={`min-h-screen flex flex-col justify-center items-center text-white text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Title Section */}
        <div className="mb-12 relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
          <h1 className="relative text-4xl  font-bold mb-8 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text ">
<span className="inline-block animate-bounce delay-100">A</span>
{" "}
<span className="inline-block animate-bounce delay-300">l</span>
<span className="inline-block animate-bounce delay-400">i</span>
<span className="inline-block animate-bounce delay-500">t</span>
<span className="inline-block animate-bounce delay-600">t</span>
<span className="inline-block animate-bounce delay-700">l</span>
<span className="inline-block animate-bounce delay-800">e</span>
{" "}
<span className="inline-block animate-bounce delay-1000">s</span>
<span className="inline-block animate-bounce delay-1100">u</span>
<span className="inline-block animate-bounce delay-1200">r</span>
<span className="inline-block animate-bounce delay-1300">p</span>
<span className="inline-block animate-bounce delay-1400">r</span>
<span className="inline-block animate-bounce delay-1500">i</span>
<span className="inline-block animate-bounce delay-1600">s</span>
<span className="inline-block animate-bounce delay-1700">e</span>
{" "}
<span className="inline-block animate-bounce delay-1900">f</span>
<span className="inline-block animate-bounce delay-2000">o</span>
<span className="inline-block animate-bounce delay-2100">r</span>
{" "}
<span className="inline-block animate-bounce delay-2300">y</span>
<span className="inline-block animate-bounce delay-2400">o</span>
<span className="inline-block animate-bounce delay-2500">u</span>
<span className="inline-block animate-bounce delay-2600">,</span>
{" "}
<span className="inline-block animate-bounce delay-2800">M</span>
<span className="inline-block animate-bounce delay-2900">o</span>
<span className="inline-block animate-bounce delay-3000">t</span>
<span className="inline-block animate-bounce delay-3100">u</span>
{" "}

          </h1>
        </div>

        {/* Gift Box */}
        <div className="mb-16 relative">
          <div 
            onClick={() => setGiftOpened(true)}
            className="relative cursor-pointer group transform hover:scale-110 transition-all duration-300"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400/50">
              <div className="text-6xl md:text-8xl animate-bounce">🎁</div>
              <p className="mt-4 text-lg md:text-xl font-semibold text-white/90">Click me!</p>
            </div>
          </div>
          
          {/* Gift Message Modal */}
          {giftOpened && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md p-8 rounded-3xl max-w-md w-full text-center border border-pink-300/30 shadow-2xl animate-pulse">
                <div className="text-6xl mb-6 animate-spin">💝</div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                  For My Cutest Bestie 💕
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  "Teri muskaan se din mera shuru hota hai, teri baaton mein hi shaam dhal jaati hai. Tu hai toh har lamha khubsurat lagta hai. Tere bina zindagi adhoori si lagti hai, tu hi toh hai jo mere har sapne ko apna sa bana deti hai. 💕✨"
                </p>
                <button 
                  onClick={() => setGiftOpened(false)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  Close with Love 💕
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-pulse">
            Scroll down to see more beautiful surprises...
          </p>
          
          {/* Animated Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-8 h-12 border-2 border-pink-300 rounded-full flex justify-center">
              <div className="w-2 h-4 bg-pink-300 rounded-full animate-pulse mt-2"></div>
            </div>
            <div className="mt-3 text-pink-300 text-2xl">↓</div>
          </div>
        </div>
      </div>

      {/* Image Slider Section - Appears on Scroll */}
      <div ref={sliderRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`transition-all duration-1000 ${sliderVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent mb-4">
              Your Beautiful Memories 💕
            </h2>
            <p className="text-xl text-gray-300">Every picture tells the cuteness of your's💓💓</p>
          </div>

          {/* Image Slider */}
          <div className="relative group">
            {/* Main Image Container - Much Bigger */}
            <div className="relative w-full max-w-6xl mx-auto h-[80vh] md:h-[90vh] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src={images[currentImageIndex]}
                alt={`Memory ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 ${imageTransition ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
              />
              
              {/* Image Counter */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-lg z-20">
                {currentImageIndex + 1} / {images.length}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => goToImage((currentImageIndex - 1 + images.length) % images.length)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20 text-2xl"
              >
                ←
              </button>
              <button
                onClick={() => goToImage((currentImageIndex + 1) % images.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20 text-2xl"
              >
                →
              </button>
            </div>

            {/* Glowing Border Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-75 animate-pulse -z-10"></div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-pink-400 scale-125 shadow-lg shadow-pink-400/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-spin origin-bottom opacity-60" style={{animationDuration: '10s', transformOrigin: '0 12rem'}}>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-spin origin-bottom opacity-40" style={{animationDuration: '15s', animationDirection: 'reverse', transformOrigin: '0 10rem'}}>
          <div className="w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <Link to="/message">
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