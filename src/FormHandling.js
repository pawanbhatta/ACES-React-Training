import React, { useState } from "react";

function FormHandling() {
  let [student, setStudent] = useState({ username: "", subject: "React" });
  let [students, setStudents] = useState([]);
  const usernameHandler = (event) => {
    setStudent({
      ...student,
      username: event.target.value,
    });
  };
  const subjectHandler = (event) => {
    setStudent({
      ...student,
      subject: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // alert(`${student.username} has ${student.subject} subject`);
    setStudents([...students, student]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username : </label>
        <input
          value={student.username}
          id="username"
          type="text"
          placeholder="Enter Username"
          onChange={usernameHandler}
        />
        <label htmlFor="subjects">Subjects :</label>
        <select value={student.subject} onChange={subjectHandler}>
          <option value="Chemistry">Chemistry</option>
          <option value="React">React</option>
          <option value="Javascript">Javascript</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {students.map((s, index) => (
        <div>
          S.N : <h3>{index}</h3>
          Username : <h3>{s.username}</h3>
          Subject : <h3>{s.subject}</h3>
        </div>
      ))}
    </div>
  );
}

export default FormHandling;
