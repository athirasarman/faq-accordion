import React, { useState, useEffect } from "react";
import "./accordion-item.css";
import IconMinus from "../assets/images/icon-minus.svg";
import IconPlus from "../assets/images/icon-plus.svg";

function AccordionItem({ key,title, content, isOpen, onToggle,buttonImage }) {
  // const [isOpen, setIsOpen] = useState(false);
  // Define state to hold the image source
  const [imageSrc, setImageSrc] = useState(buttonImage);
  // Function to change the image source
  const changeImage = () => {
    // Update the image source based on some condition or variable
    if (isOpen) {
      setImageSrc(IconPlus);
    } else {
      setImageSrc(IconMinus);
    }
  };

  const toggleAccordion = () => {
    changeImage();
    onToggle();
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="title">{title}</span>
        <span className="open-close">
          <img src={imageSrc} alt="Open-Close" />
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
      <div className="divider"></div>
    </div>
  );
}

export default AccordionItem;
