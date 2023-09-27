import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home"
import PokieDetails from "./pokieDetails/PokieDetails";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokieDetails/:name" element={<PokieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
