import useCalculator from '../contexts/CalculatorContext';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';
import TaskButtons from './TaskButtons';
import { operators, tasks } from '../utils/data';

const Calculator = () => {
    const [state, dispatch] = useCalculator();

    return (
        <div className="calculator-container">
            <div className="calculator-screen">
                <h3 className="calculator-expression">{state.expression=='' ? '( )' : state.expression}</h3>
                <h1 className="calculator-number">{state.number=='' ? '0': state.number}</h1>
            </div>
            <div className="buttons-container">
                <div className="numbers-container">
                    <NumberButtons numbers={9}/>
                    <TaskButtons tasks={tasks}/>
                </div>
                <div className="operators-container">
                    <OperatorButtons operators={operators}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;