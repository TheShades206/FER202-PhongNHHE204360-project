import React, { createContext, useState, useEffect, useContext } from 'react';
import initialStudents from '../data/students.json';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      try {
        return JSON.parse(savedStudents);
      } catch (e) {
        console.error('Error parsing students from localStorage', e);
      }
    }
    return initialStudents;
  });

  const [editingStudent, setEditingStudent] = useState(null);
  
  const [searchFilters, setSearchFilters] = useState({
    id: '',
    name: '',
    age: '',
    major: ''
  });

  // useEffect to save to localStorage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [student, ...prevStudents]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => (student.id === id ? { ...student, ...updatedStudent } : student))
    );
    // Clear editing student if the one being edited was updated
    if (editingStudent && editingStudent.id === id) {
      setEditingStudent(null);
    }
  };

  const deleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
      if (editingStudent && editingStudent.id === id) {
        setEditingStudent(null);
      }
    }
  };

  const clearEditingStudent = () => {
    setEditingStudent(null);
  };

  const updateSearchFilters = (field, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const clearSearchFilters = () => {
    setSearchFilters({
      id: '',
      name: '',
      age: '',
      major: ''
    });
  };

  // Filtered students selector
  const filteredStudents = students.filter((student) => {
    const matchId = student.id.toLowerCase().includes(searchFilters.id.toLowerCase());
    const matchName = student.name.toLowerCase().includes(searchFilters.name.toLowerCase());
    const matchAge = student.age.toString().includes(searchFilters.age);
    const matchMajor = student.major.toLowerCase().includes(searchFilters.major.toLowerCase());
    return matchId && matchName && matchAge && matchMajor;
  });

  return (
    <StudentContext.Provider
      value={{
        students,
        filteredStudents,
        editingStudent,
        searchFilters,
        addStudent,
        updateStudent,
        deleteStudent,
        setEditingStudent,
        clearEditingStudent,
        updateSearchFilters,
        clearSearchFilters
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};
