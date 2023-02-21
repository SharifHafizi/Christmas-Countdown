import "./App.css";
import Countdown from "./components/Countdown";
import Navbar from "./components/Navbar";
import Comment from "./routs/Comment";
import About from "./routs/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="App">
          <span className="Happy">Happy New Year🎇</span>
          <Countdown />
          <Routes>
            <Route path="/" />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
