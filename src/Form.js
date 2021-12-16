import React, { useState } from "react";

function Form() {
  let [student, setStudent] = useState({ username: "", subject: "" });
  let [students, setStudents] = useState([]);

  const usernameHandler = (e) => {
    // setUsername(e.target.value);
    setStudent({
      ...student,
      username: e.target.value,
    });
  };

  const subjectHandler = (e) => {
    // setSubject(e.target.value);
    setStudent({
      ...student,
      subject: e.target.value,
    });
  };

  const submitHandler = (e) => {
    // prevents from reloading of page
    e.preventDefault();

    alert(`${student.username} studies ${student.subject} subject`);

    students.push(student);
    // setStudents([...students, student]);
    setStudent({ username: "", subject: "" });
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
        <div key={index}>
          <h1>S.N : {index} </h1>
          <p>Name : {s.username} </p>
          <p>Subject : {s.subject} </p>
        </div>
      ))}
    </div>
  );
}

export default Form;
