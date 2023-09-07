import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    class: "",
    marks: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    if (
      !newStudent.id ||
      !newStudent.name ||
      !newStudent.class ||
      !newStudent.marks
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedStudents = [...students];
    if (editIndex === -1) {
      updatedStudents.push(newStudent);
    } else {
      updatedStudents[editIndex] = newStudent;
      console.log(editIndex);
      console.log(updatedStudents);
    }
    setStudents(updatedStudents);
    setNewStudent({ id: "", name: "", class: "", marks: "" });
    setEditIndex(-1);
  };

  const handleEditStudent = (index) => {
    console.log(index);
    const studentToEdit = students[index];
    console.log({ ...studentToEdit });
    setNewStudent({ ...studentToEdit });
    setEditIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="students-table">
      <div>
        <h1>Student Database</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.marks}</td>
                <td>
                  <button onClick={() => handleEditStudent(index)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-students">
        <h2>Add/Edit Student</h2>
        <label>
          ID:
          <input
            type="text"
            name="id"
            placeholder="Enter a ID"
            value={newStudent.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter a Name"
            value={newStudent.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="class"
            placeholder="Enter a Class"
            value={newStudent.class}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Marks:
          <input
            type="number"
            name="marks"
            placeholder="Enter a Marks"
            value={newStudent.marks}
            onChange={handleInputChange}
          />
        </label>

        <button onClick={handleAddStudent}>
          {editIndex === -1 ? "Add Student" : "Edit Student"}
        </button>
      </div>
    </div>
  );
};

export default App;
