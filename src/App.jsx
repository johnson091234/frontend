import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Import Routes here
import Navbar from './Components/navbar.jsx';  // Assuming navbar.jsx is in the components folder
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the page components
import Home from './pages/home.jsx';  
import About from './pages/about.jsx';  
import Hobbies from './pages/hobbies.jsx';  
import Contact from './pages/contact.jsx'; 
import Education from './pages/educ.jsx'
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Routes wrapper for your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;