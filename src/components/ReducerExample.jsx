import React from 'react';

const reducer = (state, action) => {
  if (action.type === 'increment') return { money: state.money + 1 };
  if (action.type === 'decrement') return { money: state.money - 1 };
  return state;
};

const ReducerExample = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerExample;
