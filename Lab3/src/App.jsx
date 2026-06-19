import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { StudentProvider } from './context/StudentContext';
import ThemeToggle from './components/ThemeToggle';
import StudentStats from './components/StudentStats';
import StudentSearch from './components/StudentSearch';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

function AppContent() {
  return (
    <>
      <header>
        <h1>Student Management System</h1>
        <ThemeToggle />
      </header>

      <main>
        <StudentForm />
        <StudentSearch />
        <StudentTable />
        <StudentStats />
      </main>

    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <AppContent />
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
