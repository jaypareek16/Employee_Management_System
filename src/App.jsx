import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployeeComponents />} />
          <Route path="/employee" element={<ListEmployeeComponents />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/Update-emp/:emp_id" element={<AddEmployee />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
