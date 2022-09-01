import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About-us';
import Semester from './pages/Semester';
import NotesPage from './pages/NotesPage';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notes" element={<NotesPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/notes/semester" element={<Semester/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
