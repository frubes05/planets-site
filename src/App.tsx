import "./App.scss";

import { Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Planet } from "./components/Planet";

import planetsData from "./data.json";
//import {Planets} from "./types"; // check later

function App() {
  const [planets, setPlanets] = useState<any>(null);

  useEffect(() => {
    setPlanets(planetsData);
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Navbar data = {planets}></Navbar>
      </header>
      <main className="main">
        <Routes>
          {planets && <Route path="/:planet" element={<Planet data = {planets}></Planet>}></Route>}
          <Route path="*" element={<Navigate to="/Mercury" />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
