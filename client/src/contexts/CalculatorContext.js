import { createContext, useContext, useReducer } from 'react';
import { endsWithOperator } from '../utils/valueCheck';

const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const initialState = { 
        number: '',
        expression: '',
    };
    const reducer = (state, action) => {
        switch(action.type){
            case 'VALUE': 
                return {
                    ...state, 
                    number: !endsWithOperator(state.number) 
                    && !endsWithOperator(action.payload)
                    ? `${state.number}${action.payload}` 
                    : `${state.number} ${action.payload}`,
                }
            case 'EQUAL': 
                return {
                    ...state, 
                    expression: `${state.number} =`,
                    number: eval(state.number)
                }
            case 'CE':
                return {
                    ...state, 
                    expression: '',
                    number: ''
                }
            case 'GET': 
                return {
                    ...state, 
                    expression: '',
                    number: action.payload
                }
            default: break;
        }
    }

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <CalculatorContext.Provider 
            value={[ state, dispatch ]}>
            { children }
        </CalculatorContext.Provider>
    )
}

const useCalculator = () => {
    return useContext(CalculatorContext);
} 

export { CalculatorProvider };
export default useCalculator;