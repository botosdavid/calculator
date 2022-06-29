import useCalculator from '../contexts/CalculatorContext';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';
import TaskButtons from './TaskButtons';

const Calculator = () => {
    const operators = ['+','-','x','/', '='];
    const tasks = ["CE", "SAVE", "GET"];
    const [state, dispatch] = useCalculator();

    return (
        <div className="calculator-container">
            {state.operator}
            <h1 className="calculator-screen">{state.number=='' ? '0': state.number}</h1>
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