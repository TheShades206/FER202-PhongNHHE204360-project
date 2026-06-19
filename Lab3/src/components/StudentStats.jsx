import React from 'react';
import { useStudents } from '../context/StudentContext';

export default function StudentStats() {
  const { students, filteredStudents } = useStudents();
  
  const total = students.length;
  const filteredCount = filteredStudents.length;
  const isFiltering = total !== filteredCount;

  return (
    <div className="stats-info">
      <div className="stats-text">Total Students : {total}</div>
      {isFiltering && (
        <div className="stats-text filtered">Found : {filteredCount} / {total}</div>
      )}
    </div>
  );
}
