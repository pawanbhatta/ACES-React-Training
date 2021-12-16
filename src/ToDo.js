import { useEffect, useState } from "react";
import ListToDo from "./ListToDo";
import "./ToDo.css";

function ToDo() {
  let [isChanged, setIsChanged] = useState(false);
  const [todo, updateToDo] = useState([
    { task: "This one", done: true },
    { task: "Another one", done: false },
    { task: "Another another one", done: false },
  ]);
  const markDone = (i) => {
    console.log("I");
    let items = todo;
    const item = items[i];
    items[i] = { ...item, done: true };
    updateToDo(items);
    console.log(todo);
    setIsChanged(!isChanged);
  };
  useEffect(() => {
    console.log("rerender");
  }, [todo]);
  return (
    <div style={{ fontSize: "1.5rem" }}>
      <input
        type="text"
        placeholder="Type in a task..."
        onKeyPress={(key) => console.log(key)}
      />
      <ul>
        {todo.map((todoitem, index) => (
          <ListToDo
            key={index + "," + todoitem.done}
            done={todoitem.done}
            task={todoitem.task}
            index={index}
            markDone={markDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
