import { createContext, useContext, useReducer } from 'react';

const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const initialState = { 
        number: 0,
        operator: null
    };
    const reducer = (state, action) => {
        switch(action.type){
            case 'number': 
                return {
                    ...state, 
                    number: action.payload 
                }
            case 'operator': 
                return {
                    ...state, 
                    operator: action.payload
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