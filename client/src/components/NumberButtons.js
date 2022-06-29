import Button from './Button';
import useCalculator from '../contexts/CalculatorContext';

const NumberButtons = ({ numbers }) => {
    const [ state, dispatch ]= useCalculator();

    return (
        <>
            {   
                [...Array(numbers)].map((number,index) => (
                    <Button 
                        key={index}
                        text={index + 1} 
                        onClick={() => dispatch({ type: 'value', payload: index + 1})}  />
                )) 
            }
            <Button text={0} onClick={() => dispatch({ type: 'value', payload: '0'})} width={'8rem'}/>
            <Button text={'.'} onClick={() => dispatch({ type: 'value', payload: '.'})}/>
        </>
    )
}

export default NumberButtons;