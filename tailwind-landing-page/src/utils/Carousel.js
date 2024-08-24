import React from "react";
import ScrollCarousel from "scroll-carousel-react";

const Carousel = ({ carousel, direction }) => {
  return (
    <div className="my-4">
      <ScrollCarousel
        autoplay
        autoplaySpeed={3}
        speed={2}
        direction={direction}
      >
        {carousel.map((item) => (
          <div
            key={item}
            className="flex flex-col justify-center content-center bg-white border border-gray-300 rounded-xl h-36 w-48"
          >
            <div className="mx-auto">
              <img alt={item.name} src={item.icon} className="w-18 h-18" />
              <div className="text-center">{item.name}</div>
            </div>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Carousel;
