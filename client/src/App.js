import React from 'react';
import Routes from './routes/Routes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './components/dashboard/Home';
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
