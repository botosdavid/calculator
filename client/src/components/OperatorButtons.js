import Button from './Button';
import useCalculator from '../contexts/CalculatorContext';

const OperatorButtons = ({ operators }) => {
    const [ state, dispatch ] = useCalculator();

    return (
        <>
            { operators.map((operator, index) => (
                            <Button 
                                key={index}
                                text={operator} 
                                onClick={() => 
                                    dispatch({type: 'operator', payload: operator})}  />
                        )) 
                    }
        </>
    )
}

export default OperatorButtons;