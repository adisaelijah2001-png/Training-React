import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import UseEffect from "./Useeffect";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">

        <nav className="navbar">
          <Link className="navbar-logo" to="/">Gatherly</Link>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;