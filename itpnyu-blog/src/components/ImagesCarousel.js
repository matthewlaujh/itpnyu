import React, { useState } from "react";
import "./components.css";

function ImagesCarousel({ images, orientation = "landscape" }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const carouselClass = `carousel ${orientation}`; // This will add either "portrait" or "landscape" as an additional class

  return (
    <div className="componentContainer">
      <div className={carouselClass}>
        <button onClick={previousSlide} className="left-arrow">
          ◀
        </button>
        <img src={images[currentImageIndex]} alt="" />
        <button onClick={nextSlide} className="right-arrow">
          ▶
        </button>

        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setCurrentImageIndex(index)}
              className={index === currentImageIndex ? "active-thumbnail" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesCarousel;
