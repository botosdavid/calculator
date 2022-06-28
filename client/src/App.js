import './App.css';
import { useEffect } from 'react';

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
      
    </div>
  );
}

export default App;
