import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import BirthdayComponent from './components/BirthdayComponent';
import Calculator from './components/Calculator'
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Toggle/>
    </div>
  );
}

export default App;
