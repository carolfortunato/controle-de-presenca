import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfessor from './components/CreateProfessor';
import ProfessorList from './components/ProfessorList';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import CreateClass from './components/CreateClass';
import ClassList from './components/ClassList';
import DisciplineList from './components/DisciplineList';
import CreateDiscipline from './components/CreateDiscipline';
import MainTitle from './components/elements/MainTitle';
import Header from './components/elements/Header'
import Login from './components/Login'
import SelectClass from './components/SelectClass'
import SelectDiscipline from './components/SelectDiscipline';
import SelectPresence from './components/SelectPresence';
import AttendanceList from './components/AttendanceList';


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <MainTitle/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/select-class" element={<SelectClass />} />
          <Route path="/select-discipline" element={<SelectDiscipline />} />
          <Route path="/select-presence" element={<SelectPresence />} />
          <Route path="/attendance-list" element={<AttendanceList />} />

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
