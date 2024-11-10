import React, { useState, useEffect } from 'react';

const Background = () => {
  const [color, setColor] = useState('#ffffff');
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let interval;
    if (isChanging) {
      interval = setInterval(() => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(newColor);
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isChanging]);

  const toggleColorChange = () => {
    setIsChanging(prevState => !prevState);
  };

  return (
    <div style={{backgroundColor: color, width:'600px',height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={toggleColorChange} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isChanging ? 'Parar' : 'Iniciar'} Mudança de Cor
      </button>
    </div>
  );
};

export default Background