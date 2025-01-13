import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
          <Route path="/events" element={<EventsPage />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
