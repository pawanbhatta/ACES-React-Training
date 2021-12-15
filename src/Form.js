import React, { useState } from "react";

function Form() {
  let [username, setUsername] = useState("");
  let [subject, setSubject] = useState("");

  let [student, setStudent] = useState({});
  let [students, setStudents] = useState([]);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const submitHandler = (e) => {
    // prevents from reloading of page
    e.preventDefault();
    console.log(username, subject);

    setStudent({
      username,
      subject,
    });
    console.log(student);
    setStudents([...students, student]);
    console.log(students);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username : </label>
        <input
          value={username}
          id="username"
          type="text"
          placeholder="Enter Username"
          onChange={usernameHandler}
        />
        <label htmlFor="subjects">Subjects :</label>
        <select
          value={subject}
          onChange={subjectHandler}
          id="subjects"
          htmlFor="subjects"
        >
          <option>Chemistry</option>
          <option>React</option>
          <option>Javascript</option>
        </select>
        <button>Submit</button>
      </form>

      {students.map((student, index) => (
        <div key={index}>
          <h1>S.N : {index} </h1>
          <p>Name : {student.username} </p>
          <p>Subject : {student.subject} </p>
        </div>
      ))}
    </div>
  );
}

export default Form;
