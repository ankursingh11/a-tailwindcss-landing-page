import React from "react";
import ScrollCarousel from "scroll-carousel-react";

const Carousel = ({ carousel, direction }) => {
  return (
    <div className="my-4 border rounded-lg p-3">
      <ScrollCarousel
        autoplay
        autoplaySpeed={10}
        speed={2}
        direction={direction}
      >
        {carousel.map((item) => (
          <div
            key={item}
            className="flex justify-center content-center text-4xl w-[24rem]"
          >
            <span className = "">{item}</span>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Carousel;
