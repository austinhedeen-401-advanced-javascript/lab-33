import React from 'react';
import { CounterContext } from '../../context/counter-context';

const Incrementer = () => {
  const buttonStyle = {
    height: '3em',
  };

  return (
    <CounterContext.Consumer>
      {(context) => (
        <button style={buttonStyle} onClick={context.increment}> + </button>
      )}
    </CounterContext.Consumer>
  );
};

export default Incrementer;
