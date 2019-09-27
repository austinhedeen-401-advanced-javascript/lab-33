import React from 'react';
import PropTypes from 'prop-types';

export const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

CounterProvider.propTypes = {
  children: PropTypes.array,
};

export default CounterProvider;
