import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

function MyApp() {
  // eslint-disable-next-line
  const [value, setValue] = useState(new Date());

  const onChange = (e) => {
    window.alert(e);
    window.alert(`Milliseconds since Jan 1, 1970 = ${new Date(e).getTime()}`);
  }

  return (
    <div style={{ width: "500px" }}>
      <Calendar onChange={(e) => onChange(e)} value={value} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyApp />
      </header>
    </div>
  );
}

export default App;
