import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/BasicComponents/Navbar';
import Footer from './components/BasicComponents/Footer';
import Home from './pages/Home';
import About from './pages/About-us';
import Semester from './pages/Semester';
import NotesPage from './pages/NotesPage';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notes" element={<NotesPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/notes/semester" element={<Semester/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
