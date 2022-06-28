import Button from '../components/Button';

const Calculator = () => {
    const operators = ['+','-','x','/', '.'];
    const tasks = ["DEL", "SAVE", "GET"];

    return (
        <div className="calculator-container">
            <h1 className="calculator-screen">0</h1>
            <div className="buttons-container">
                <div className="numbers-container">
                    {   [...Array(9)].map((number,index) => (
                            <Button text={index + 1} onClick={null} key={index} />
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
                            <Button text={operator} onClick={null} key={index} />
                        )) }
                </div>
            </div>
        </div>
    )
}

export default Calculator;