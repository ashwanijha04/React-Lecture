import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import BirthdayComponent from './components/BirthdayComponent';
import Calculator from './components/Calculator'
import Toggle from './components/Toggle';

// This is just a test comment which serves no purpose other than educating people

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Toggle/>
      <TestComponent name="Ashwani"/>
    </div>
  );
}

export default App;
