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
          <Route path="/" element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/notes" exact element={<NotesPage/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/notes/semester" exact element={<Semester/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
