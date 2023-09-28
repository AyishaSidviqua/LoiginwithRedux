import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { colors } from './colors';
import Custom from './Components/Custom';
import PreRegister from './Module/PreRegister/PreRegister';
import { sampleData } from './Module/PreRegister/SampleData';
import Register from './Module/Register/Register';
import { Route, Routes } from 'react-router-dom';
import PostRegister from './Module/PostRegister/PostRegister';
import Logins from './Module/LoginScreen/logins';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='preRegister' element={<PreRegister />} />
        <Route path='postRegister' element={<PostRegister />} />
        <Route path='logins' element={<Logins/>}/>
      </Routes>
    </div>
  );
}

export default App;
