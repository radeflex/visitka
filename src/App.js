import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';

import Projects from './pages/Projects/Projects.jsx';
import Home from './pages/Home/Home.jsx';
import Contacts from "./pages/Contacts/Contacts.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
