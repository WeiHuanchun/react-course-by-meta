import React from 'react';

const RefExample = () => {
  const formRef = React.useRef(null);
  const [state, setState] = React.useState('');
  const focusInput = () => {
    formRef.current.focus();
    console.log(formRef.current.value);
  };
  const changeHandler = () => {
    setState(formRef.current.value);
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      <h3>{state}</h3>
      <input type="text" ref={formRef} onChange={changeHandler} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;
