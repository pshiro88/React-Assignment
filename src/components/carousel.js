import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Total number of slides
  const autoMoveInterval = 5000; // Interval for auto-moving (in milliseconds)

  // Array of card objects with different content and styles
  const slides = [
    { id: 0, colors: ['bg-blue-200', 'bg-green-200'], text: ['Slide 1 Text 1', 'Slide 1 Text 2'] },
    { id: 1, colors: ['bg-yellow-200', 'bg-red-200'], text: ['Slide 2 Text 1', 'Slide 2 Text 2'] },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoMoveInterval);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full max-w-lg mx-auto relative">
      <div className="overflow-hidden h-64 rounded-lg">
        {/* Carousel container */}
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Adjusted to show two slides at a time
        >
          {/* Slides */}
          {slides.map((slide) => (
            <div key={slide.id} className="px-2">
              <div className="flex flex-row w-[500px]  h-64">
                {slide.colors.map((color, index) => (
                  <div key={index} className={`${color} flex-1 mx-4 flex justify-center items-center mb-2 rounded-md`}>
                    <p className="text-white">{slide.text[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-2 rounded-full bg-gray-400 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ${
              index === currentSlide ? 'bg-gray-600' : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
