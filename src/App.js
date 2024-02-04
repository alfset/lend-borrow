import './App.css';
import maintenance from './maintenance.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We're under maintenance</h1>
        <img src={maintenance} alt="rocket" />
      </header>
    </div>
  );
}

export default App;
