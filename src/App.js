import logo from './logo.svg';
import './index.css';
import Pomodoro from './Pomodoro';
import Settings from './components/Settings';

// https://www.youtube.com/watch?v=9z1qBcFwdXg 

function App() {
  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <br></br>
      <Settings />
      <br></br>
      <Pomodoro />
    </div>
  );
}

export default App;
