import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import GreetingScreen from './components/greetingScreen'
import Message from './components/Message';
import Appreciate from './components/Appreciate';
import Cake from './components/Cake';
import End from './components/End';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/greeting" element={<GreetingScreen />} />
      <Route path="/message" element={<Message/>}></Route>
      <Route path="/appreciate" element={<Appreciate/>}></Route>
      <Route path="/Cake" element={<Cake/>}></Route>
      <Route path="/end" element={<End/>}></Route>
    </Routes>
  );
  }


