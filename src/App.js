import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(25,39,52)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar about="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to Transform"
                  title="Converted text"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
