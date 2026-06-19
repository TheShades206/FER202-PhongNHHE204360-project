import React from 'react';
import { useStudents } from '../context/StudentContext';

export default function StudentSearch() {
  const { searchFilters, updateSearchFilters, clearSearchFilters } = useStudents();

  const handleInputChange = (field) => (e) => {
    updateSearchFilters(field, e.target.value);
  };

  const hasActiveFilters = Object.values(searchFilters).some(val => val !== '');

  return (
    <div className="search-section">
      <div className="section-header">
        <h3>Search Students</h3>
        {hasActiveFilters && (
          <button onClick={clearSearchFilters} className="clear-btn">
            Clear Filters
          </button>
        )}
      </div>
      <div className="search-grid">
        <div className="form-group-search">
          <label htmlFor="search-id">Search by ID</label>
          <input
            id="search-id"
            type="text"
            placeholder="Student ID"
            value={searchFilters.id}
            onChange={handleInputChange('id')}
          />
        </div>
        <div className="form-group-search">
          <label htmlFor="search-name">Search by Name</label>
          <input
            id="search-name"
            type="text"
            placeholder="Name"
            value={searchFilters.name}
            onChange={handleInputChange('name')}
          />
        </div>
        <div className="form-group-search">
          <label htmlFor="search-age">Search by Age</label>
          <input
            id="search-age"
            type="number"
            placeholder="Age"
            value={searchFilters.age}
            onChange={handleInputChange('age')}
          />
        </div>
        <div className="form-group-search">
          <label htmlFor="search-major">Search by Major</label>
          <input
            id="search-major"
            type="text"
            placeholder="Major"
            value={searchFilters.major}
            onChange={handleInputChange('major')}
          />
        </div>
      </div>
    </div>
  );
}
