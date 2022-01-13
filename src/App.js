import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {News} from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App =()=> {
  const pageSize =6;
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/Business" element={<News key="Business"
            pageSize={6} country="in" category= "Business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key="Entertainment"
            pageSize={6} country="in" category= "Entertainment"/>}></Route>
          <Route exact path="/General" element={<News key="General"
            pageSize={6} country="in" category= "General"/>}></Route>
          <Route exact path="/Health" element={<News key="Health"
            pageSize={6} country="in" category= "Health"/>}></Route>
          <Route exact path="/Science" element={<News key="Science"
            pageSize={6} country="in" category= "Science"/>}></Route>
          <Route exact path="/Sports" element={<News key="Sports"
            pageSize={6} country="in" category= "Sports"/>}></Route>
          <Route exact path="/Technology" element={<News key="Technology"
            pageSize={6} country="in" category= "Technology"/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;


