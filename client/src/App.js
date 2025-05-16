import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfessor from './components/CreateProfessor';
import ProfessorList from './components/ProfessorList';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import MainTitle from './components/elements/MainTitle'

const App = () => {
  return (
    <Router>
      <div>
        <MainTitle/>
        <Routes>
          <Route path="/create-professor" element={<CreateProfessor />} />
          <Route path="/professors" element={<ProfessorList />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/students" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
