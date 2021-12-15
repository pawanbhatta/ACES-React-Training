import React from "react";
import { Header } from "./Header";

const Person = ({ myName }) => {
  return (
    <div>
      <Header myname={myName} />
    </div>
  );
};

export default Person;
