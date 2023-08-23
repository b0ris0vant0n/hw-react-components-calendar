import './App.css';
import Calendar from './Calendar';

function App() {
  const now = new Date();

  return (
    <div className="container">
      <Calendar date={now} />
    </div>
  );
}

export default App;