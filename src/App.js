import React from "react";
import Form from "./Form";
import FormHandling from "./FormHandling";
import Friend from "./Friend";
import UsingRefs from "./UsingRefs";
import Timer from "./Timer";
import ToDo from "./ToDo";

const App = () => {
  let friends = [
    { name: "Sagar", height: 6 },
    { name: "Kushal", height: 5.6 },
    { name: "Ashish", height: 6 },
    { name: "Rupesh", height: 5.8 },
    { name: "Tika", height: 5.5 },
  ];

  return (
    <div>
      {/* {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))} */}
      {/* <FormHandling /> */}
      {/* <Timer /> */}
      <ToDo />
    </div>
  );
};

export default App;
