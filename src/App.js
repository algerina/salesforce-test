import React from 'react';
import './App.css';
// eslint-disable-next-line no-use-before-define
import CandidatureList from './components/CandidatureList';
import AddCandidatureForm from './components/AddCandidatureForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CandidatureList />
        <AddCandidatureForm />
      </header>
    </div>
  );
}

export default App;
