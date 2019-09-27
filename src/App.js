import React from 'react';

import Counter from './components/counter/Counter';
import CounterProvider from './context/counter-context';
import Decrementer from './components/incrementer/Decrementer';
import Incrementer from './components/decrementer/Incrementer';

function App() {
  const containerStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  };

  return (
    <CounterProvider>
      <div style={containerStyle}>
        <Decrementer/>
        <Counter />
        <Incrementer/>
      </div>
    </CounterProvider>
  );
}

export default App;
