import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import "./carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Sample1",
      description: "Sample text1 ajdhieqwbfdjk",
      icon: require("./Media/example1.svg"),
    },
    {
      title: "Sample2",
      description: "Sample text2 sdjkbajksdb",
      icon: require("./Media/example2.svg"),
    },
    {
      title: "Sample3",
      description: "Sample text3 bahahadsjsbda",
      icon: require("./Media/example3.svg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  // Function to automatically scroll the carousel
  const autoScroll = () => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change the interval (5000 milliseconds = 5 seconds)

    return () => clearInterval(timer); // Cleanup function to clear the timer
  };

  useEffect(() => {
    autoScroll(); // Start automatic scrolling when component mounts
  }, []);

  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} width={"100%"} />
        ))}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => (
            <button
              key={index}
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span
                className={`material-symbols-outlined ${
                  index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"
                }`}
              >
                radio_button_checked
              </span>
            </button>
          ))}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
