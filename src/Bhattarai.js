import React, { useState } from "react";
// import "./Counter.css";

function Counter() {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(++count);
    notiMessage(cCounter);
  };
  const decrement = () => {
    setCount(--count);
    notiMessage(cCounter);
  };

  let [timerState, setTState] = useState("initial");
  let [timer, setTimer] = useState(0);
  let [counting, setCounting] = useState();
  let [checkpoints, changeCheckpoints] = useState([]);
  const checkpointList = () => {
    return (
      <>
        {checkpoints.map((c, i) => (
          <li key={i}>
            {i + 1}. {c}
          </li>
        ))}
      </>
    );
  };
  const pauseTimer = () => {
    setTState("paused");
    setCounting(clearInterval(counting));
    changeCheckpoints([...checkpoints, formattedTime()]);
    console.log(checkpoints);
    notiMessage(TimerPause);
  };
  const resetTimer = () => {
    setTState("initial");
    setTimer(0);
    checkpoints = [];
    changeCheckpoints([]);
    notiMessage(TimerStop);
  };
  const startTimer = () => {
    setTState("running");
    setCounting(setInterval(() => setTimer(++timer), 10));
    notiMessage(TimerStart);
  };
  const formattedTime = () => {
    let milli = timer % 100;
    let seconds = Math.floor((timer / 100) % 60);
    let minutes = Math.floor(timer / 6000);
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (milli < 10) milli = "0" + milli;
    return minutes + ":" + seconds + "." + milli;
  };

  const [messageOptions, setOptions] = useState({ opacity: "0", data: "" });
  const message = () => {
    return (
      <div
        className="message"
        style={{
          fontSize: "1rem",
          opacity: messageOptions.opacity,
          transition: "opacity .2s ease-in",
          color: "green",
        }}
      >
        {messageOptions.data}
      </div>
    );
  };
  const cCounter = "Change in counter detected...";
  const TimerStart = "Timer Started";
  const TimerStop = "Timer Stopped";
  const TimerPause = "Timer Paused";
  const notiMessage = (data) => {
    setOptions({ opacity: "100", data: data });
    setTimeout(() => setOptions({ opacity: "0", data: data }), 500);
  };
  return (
    <div className="container">
      <div className="counter">
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <div className="time">
        {formattedTime()}
        <div className="changeState">
          {timerState === "initial" && (
            <button onClick={startTimer} disabled={timerState !== "initial"}>
              Start
            </button>
          )}
          {timerState === "paused" && (
            <button onClick={startTimer} disabled={timerState !== "paused"}>
              Continue
            </button>
          )}
          {timerState === "running" && (
            <button onClick={pauseTimer} disabled={timerState !== "running"}>
              Pause
            </button>
          )}
          {timerState !== "initial" && (
            <button onClick={resetTimer} disabled={timerState === "initial"}>
              Stop
            </button>
          )}
        </div>
        {message("")}
        <ul
          style={{
            fontSize: "1.5rem",
          }}
        >
          {!!checkpoints.length && "Checkpoints:"}
          {checkpointList()}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
