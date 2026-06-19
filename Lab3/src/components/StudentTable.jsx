import React from 'react';
import { useStudents } from '../context/StudentContext';

export default function StudentTable() {
  const { filteredStudents, deleteStudent, setEditingStudent, editingStudent } = useStudents();

  return (
    <div className="table-section">
      <h3>Student List</h3>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Major</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-message">
                  No matching students found.
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => {
                const isEditing = editingStudent && editingStudent.id === student.id;
                return (
                  <tr 
                    key={student.id} 
                    className={isEditing ? 'row-editing' : ''}
                  >
                    <td><strong>{student.id}</strong></td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.major}</td>
                    <td className="actions-cell">
                      <button
                        onClick={() => setEditingStudent(student)}
                        className="btn-edit"
                        title="Edit student"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteStudent(student.id)}
                        className="btn-delete"
                        title="Delete student"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
