import React, { useState } from "react";
import Message from "./Message";
import LoginButton from "./LoginButton";

// CONDITIONAL RENDERING
const App = () => {
  let [loggedIn, setLoggedIn] = useState(true);

  const clickHandler = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      <Message loggedIn={loggedIn} />
      <LoginButton clickHandler={clickHandler} loggedIn={loggedIn} />
    </div>
  );
};

export default App;
