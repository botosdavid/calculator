import './App.css';
import Calculator from './components/Calculator';
import { CalculatorProvider } from './contexts/CalculatorContext';

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
