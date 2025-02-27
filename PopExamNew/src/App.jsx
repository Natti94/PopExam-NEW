import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from "./pages/start";
import Settings from "./pages/settings";
import About from "./pages/about";
import Help from "./pages/help";

function App() {
  return (
<>
<h1>popExam</h1>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Start</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
