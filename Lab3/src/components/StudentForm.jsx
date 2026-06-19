import React, { useState, useEffect } from 'react';
import { useStudents } from '../context/StudentContext';

export default function StudentForm() {
  const { students, addStudent, updateStudent, editingStudent, clearEditingStudent } = useStudents();

  // Local state for form fields
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [error, setError] = useState('');

  // Update form fields when editing student changes
  useEffect(() => {
    if (editingStudent) {
      setId(editingStudent.id);
      setName(editingStudent.name);
      setAge(editingStudent.age.toString());
      setMajor(editingStudent.major);
      setError('');
    } else {
      // Clear form
      resetForm();
    }
  }, [editingStudent]);

  const resetForm = () => {
    setId('');
    setName('');
    setAge('');
    setMajor('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!id.trim() || !name.trim() || !age.trim() || !major.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      setError('Age must be a valid positive integer.');
      return;
    }

    if (editingStudent) {
      // Update Mode
      updateStudent(editingStudent.id, {
        name: name.trim(),
        age: parsedAge,
        major: major.trim()
      });
      resetForm();
    } else {
      // Add Mode
      // Check if ID is unique
      const idExists = students.some(
        (s) => s.id.trim().toLowerCase() === id.trim().toLowerCase()
      );
      if (idExists) {
        setError('Student ID already exists. Please choose a different one.');
        return;
      }

      addStudent({
        id: id.trim(),
        name: name.trim(),
        age: parsedAge,
        major: major.trim()
      });
      resetForm();
    }
  };

  const handleCancelEdit = () => {
    clearEditingStudent();
    resetForm();
  };

  return (
    <div className="form-section">
      <h3>
        {editingStudent ? 'Edit Student' : 'Add New Student'}
      </h3>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="student-id">Student ID</label>
          <input
            id="student-id"
            type="text"
            placeholder="SV005"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={!!editingStudent} // Cannot change ID during edit
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-name">Full Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-age">Age</label>
          <input
            id="student-age"
            type="number"
            placeholder="20"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-major">Major</label>
          <input
            id="student-major"
            type="text"
            placeholder="Software Engineering"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editingStudent ? 'Update' : 'Add Student'}
          </button>
          {editingStudent && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="cancel-btn"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
