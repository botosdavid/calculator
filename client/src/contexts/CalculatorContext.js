import { createContext, useContext, useReducer } from 'react';
import { endsWithOperator, hasLastNumberDot, isLastNumberZero } from '../utils/valueCheck';

const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const initialState = { 
        number: '0',
        expression: '( )',
    };
    const reducer = (state, action) => {
        switch(action.type){
            case 'VALUE': 
                if( endsWithOperator(state.number)
                    && endsWithOperator(action.payload))
                    return state;
                if( hasLastNumberDot(state.number) 
                    && action.payload === '.') 
                    return state;
                if( isLastNumberZero(state.number)  
                    && !endsWithOperator(action.payload) 
                    && action.payload !== '.')
                    return {
                        ...state,
                        number: state.number.slice(0,-1) + action.payload
                    }
                return {
                    ...state, 
                    number: !endsWithOperator(state.number) 
                    && !endsWithOperator(action.payload)
                    ? `${state.number}${action.payload}` 
                    : `${state.number} ${action.payload}`,
                }
            case 'EQUAL': 
                if( endsWithOperator(state.number)) 
                    return state;
                try{
                    return {
                        ...state, 
                        expression: `${state.number} =`,
                        number: eval(state.number).toString()
                    }
                }catch { 
                    return state; 
                }
            case 'GET': 
                return {
                    ...state, 
                    expression: '( )',
                    number: action.payload
                }
            case 'CE':
                return initialState;
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