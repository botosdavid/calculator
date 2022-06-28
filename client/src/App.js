import './App.css';
import { useEffect } from 'react';
import Calculator from './components/Calculator';

function App() {
  const getData = async () => {
    const response = await fetch('http://localhost:8000');
    const data = await response.json();
    console.log(data.message);
  }

  useEffect(() => {
    getData();
  }, []) 

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
