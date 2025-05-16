import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfessor from './components/CreateProfessor';
import ProfessorList from './components/ProfessorList';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import CreateClass from './components/CreateClass';
import ClassList from './components/ClassList';
import DisciplineList from './components/DisciplineList'
import CreateDiscipline from './components/CreateDiscipline';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Sistema de Controle de Presença</h1>
        <Routes>
          <Route path="/create-professor" element={<CreateProfessor />} />
          <Route path="/professors" element={<ProfessorList />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/classes" element={<ClassList />} />
          <Route path="/disciplines" element={<DisciplineList />} />
          <Route path="/create-discipline" element={<CreateDiscipline />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
