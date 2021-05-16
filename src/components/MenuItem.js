import React from 'react';

const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => onSelect(text);

  return (
    <a href="#" onClick={handleClick}>
      {text}
    </a>
  );
};

export default MenuItem;
