// Refs make it possible to directly access DOM nodes via react
import React, { useEffect, useRef, useState } from "react";

const UsingRefs = () => {
  let [timer, setTimer] = useState(0);
  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      {timer}

      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default UsingRefs;
