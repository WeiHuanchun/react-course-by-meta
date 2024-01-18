import { useEffect, useState } from 'react';

function EffectExample() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? 'Here is a message' : 'Using the useEffect hook';
  },[]);
  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <p>Here is a message</p>}
    </div>
  );
}

export default EffectExample;
