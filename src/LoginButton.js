import React from "react";

const LoginButton = ({ clickHandler, loggedIn }) => {
  return <button onClick={clickHandler}>Log {loggedIn ? "Out" : "In"} </button>;
};

export default LoginButton;
