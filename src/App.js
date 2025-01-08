import logo from './datadog.svg';
import {useState} from 'react'
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height: '300px'}} alt="logo" />
        
        <p style={{color: '#6833a9'}}>
          {count}
        </p>
        <Button variant='contained' onClick={() => setCount(count + 1)}>Bump</Button>
      </header>
    </div>
  );
}

export default App;
