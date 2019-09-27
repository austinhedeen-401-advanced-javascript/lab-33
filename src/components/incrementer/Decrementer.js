import React, { useContext } from 'react';
import { CounterContext } from '../../context/counter-context';

const Decrementer = () => {
  const buttonStyle = {
    height: '3em',
  };

  const context = useContext(CounterContext);

  return (
    <button style={buttonStyle} onClick={context.decrement}> - </button>
  );
};

export default Decrementer;
