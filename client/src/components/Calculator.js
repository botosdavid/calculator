import Button from '../components/Button';
import useCalculator from '../contexts/CalculatorContext';

const Calculator = () => {
    // todo: equal sign missing !!!
    const operators = ['+','-','x','/', '.'];
    const tasks = ["DEL", "SAVE", "GET"];

    const [state, dispatch] = useCalculator();

    return (
        <div className="calculator-container">
            {state.operator}
            <h1 className="calculator-screen">{state.number}</h1>
            <div className="buttons-container">
                <div className="numbers-container">
                    {   [...Array(9)].map((number,index) => (
                            <Button 
                                key={index}
                                text={index + 1} 
                                onClick={() => dispatch({ type: 'number', payload: index + 1})}  />
                        )) 
                    }
                    <Button text={0} width={'12rem'}/>
                    { tasks.map((task, index) => (
                            <Button text={task} onClick={null} key={index} />
                        )) 
                    }
                </div>
                <div className="operators-container">
                    { operators.map((operator, index) => (
                            <Button 
                                key={index}
                                text={operator} 
                                onClick={() => dispatch({ type: 'operator', payload: operator})}  />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator;