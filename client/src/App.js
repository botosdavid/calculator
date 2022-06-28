import './App.css';
import { useEffect } from 'react';
import Calculator from './components/Calculator';
import { CalculatorProvider } from './contexts/CalculatorContext';

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
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
