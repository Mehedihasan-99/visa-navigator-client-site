import React, { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://i.ibb.co/cQNzF07/visa-canada.jpg",
    },
    {
      image: "https://i.ibb.co/QvhSWf6/visa-travel-2.jpg",
    },
    {
      image: "https://i.ibb.co/rt0qgGB/visa-usa.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform:
              index < currentSlide
                ? "translateX(-100%)"
                : index > currentSlide
                ? "translateX(100%)"
                : "translateX(0)",
          }}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full "
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm text-white bg-gray-800/70 hover:bg-gray-900"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm text-white bg-gray-800/70 hover:bg-gray-900"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
