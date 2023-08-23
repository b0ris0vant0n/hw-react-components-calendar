import React from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  const now = new Date(2023, 7, 22);

  return (
    <div className="container">
      <Calendar date={now} />
    </div>
  );
}

export default App;