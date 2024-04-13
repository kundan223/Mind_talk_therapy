import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Game_1 from './components/game_1/game_1';
import Landing from './components/landing/landing';
import Game_2 from './components/game_1/game_2';
import Activity from './components/game_1/activity';
import Feeling from './components/game_1/fellings';


function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="justify-center px-4">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
                
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path='/game_1' element={<Game_1/>} />
          <Route path='/game_2' element={<Game_2/>} />
          <Route path='/landing' element={<Landing/>} />
          <Route path='/activity' element={<Activity/>} />
          <Route path='/feeling' element={<Feeling/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
