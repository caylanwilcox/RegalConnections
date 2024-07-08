import React, { useState } from 'react';
import './css/SideWidgetButton.css';

const SideWidgetButton = ({ onClick }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
    onClick();
  };

  return (
    <div className="side-widget-button" onClick={handleClick}>
      <span className="side-widget-text">{isHidden ? 'Learn More' : 'Hide'}</span>
    </div>
  );
};

export default SideWidgetButton;
