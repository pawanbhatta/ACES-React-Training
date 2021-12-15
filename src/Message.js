import React from "react";

const Message = ({ loggedIn }) => {
  return <h1>I am Logged {loggedIn ? "In" : "Out"} </h1>;
};

export default Message;
