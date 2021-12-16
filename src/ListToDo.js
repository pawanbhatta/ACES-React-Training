import { useEffect, useState } from "react";
import "./ToDo.css";
const ListToDo = ({ done, task, index, markDone }) => {
  let [isdone, setIsDone] = useState(done);

  console.log("done", done);
  useEffect(() => {
    console.log("here");
  });
  return (
    <li
      key={done}
      className={done ? "done" : ""}
      onDoubleClick={() => markDone(index)}
    >
      - {task}
      <span>
        <button onClick={() => {}}>{done ? "Remove" : "Delete"}</button>
      </span>
    </li>
  );
};
export default ListToDo;
