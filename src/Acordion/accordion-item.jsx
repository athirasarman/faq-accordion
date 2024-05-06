import React, { useState } from 'react';
import './accordion-item.css';
import IconMinus from '../assets/images/icon-minus.svg';
import IconPlus from '../assets/images/icon-plus.svg';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  // Define state to hold the image source
  const [imageSrc, setImageSrc] = useState(IconMinus);
   // Function to change the image source
   const changeImage = () => {
    // Update the image source based on some condition or variable
    if (isOpen) {
      setImageSrc(IconMinus);
    } else {  
      setImageSrc(IconPlus);
    }
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    changeImage();
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className='title'>{title}</span>
        <span className='open-close'>
        <img src={imageSrc} alt="Open-Close" />
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default AccordionItem;
