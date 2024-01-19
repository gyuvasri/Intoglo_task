import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddDocbox from './components/AddDocbox';

function App() {
 return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <AddDocbox />
    </div>
 );
}

export default App;