import { createContext, useContext, useReducer } from 'react';
import { endsWithOperator, isValidSyntaxZero, hasLastNumberDot } from '../utils/valueCheck';

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
                    && action.payload==='.') 
                    return state;
                if(state.number === '0') 
                    return {
                        ...state,
                        number: action.payload
                    }
                if(state.number.toString().slice(-1) === '0' 
                    && (state.number.toString().slice(-2)[0] === ' ') 
                    && !endsWithOperator(action.payload) && action.payload !== '.')
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
            case 'CE':
                return {
                    ...state, 
                    expression: '( )',
                    number: '0'
                }
            case 'GET': 
                return {
                    ...state, 
                    expression: '( )',
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