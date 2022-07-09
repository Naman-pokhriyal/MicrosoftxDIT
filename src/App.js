import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Blogs from "./Pages/Blogs";
import Events from "./Pages/Events";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
