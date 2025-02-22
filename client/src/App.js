import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewCharacterForm from "./NewCharacterForm";
import Login from "./Login";
import LoginForm from "./LoginForm";
import EditCharacter from "./EditCharacter";
import Demo from "./Demo";
// import SignUpForm from "./SignUpForm";

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LoginForm onLogin={setUser} />;

  return (
  
    <div className="App">
      {/* <MainPage /> */}
      <NavBar user={user} setUser={setUser} />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/about" element= { <About  /> } />
                <Route path ="/demo" element= { <Demo  /> } /> 
                <Route path ="/login" element= { <Login setUser={setUser} /> } />
                <Route path="/mainpage" element= { <MainPage />} />
                <Route path="/newcharacterform" element= { <NewCharacterForm /> } />
                <Route path="/editcharacter/:id" element= { <EditCharacter /> } />
          </Routes>
    </div>
  );
}

export default App;
