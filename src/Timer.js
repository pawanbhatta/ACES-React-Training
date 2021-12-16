import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  let [timer, setTimer] = useState(0);
  let inputRef = useRef();
  let intervalRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current.value);

    intervalRef.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Timer;
