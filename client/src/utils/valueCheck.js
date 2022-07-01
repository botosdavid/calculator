import { operators } from '../utils/data';

const endsWithOperator = (expression) => {
    const stringExpression = expression.toString();
    const lastCharacterOfExpression = stringExpression.slice(-1);
    return operators.includes(lastCharacterOfExpression);
}

const isValidSyntaxZero = (expression, value) => {
    if(expression === '0' && value !== '.') return false;
    
    const stringExpression = expression.toString();
    const lastCharacterOfExpression = stringExpression.slice(-1);
    const secondLastCharecterOfExpression = stringExpression.slice(-2)[0];
    if( lastCharacterOfExpression === '0' 
        && secondLastCharecterOfExpression === ' ' 
        && !endsWithOperator(value))
        return false;
    return true;
}

const hasLastNumberDot = (numberExpression) => {
    const numberArray = numberExpression.toString().split(" ");
    const lastNumber = numberArray.slice(-1)[0];
    return lastNumber.includes('.');
}

export { endsWithOperator, isValidSyntaxZero, hasLastNumberDot };