import React from 'react';
import { CounterContext } from '../../context/counter-context';

const counterStyle = {
  display: 'inline-block',
  fontSize: '1em',
  border: '2px solid #444',
  borderRadius: '50%',
  lineHeight: '5em',
  textAlign: 'center',
  width: '5em',
};

class Count extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <span style={counterStyle}>{this.context.count}</span>
    );
  }
}

export default Count;
