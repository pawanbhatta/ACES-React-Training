import React from "react";

function Friend({ friend }) {
  return (
    <div>
      <h1>Name : {friend.name}</h1>
      <h5>Height : {friend.height} </h5>
    </div>
  );
}

export default Friend;
