import React, { useState } from "react";
import "./components.css";

function ImagesCarousel({ images }) {
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

  return (
    <div className="carousel">
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
  );
}

export default ImagesCarousel;
