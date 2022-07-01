import { operators } from '../utils/data';

const endsWithOperator = (expression) => {
    const stringExpression = expression.toString();
    const lastCharacterOfExpression = stringExpression.slice(-1);
    return operators.includes(lastCharacterOfExpression);
}

const hasLastNumberDot = (numberExpression) => {
    const numberArray = numberExpression.toString().split(" ");
    const lastNumber = numberArray.slice(-1)[0];
    return lastNumber.includes('.');
}

const isLastNumberZero = (numberExpression) => {
    if(numberExpression === '0') return true;
    const lastCharacter = numberExpression.toString().slice(-1);
    const secondLastCharacter = numberExpression.toString().slice(-2)[0];
    if( secondLastCharacter === ' ' 
        && lastCharacter === '0') 
        return true;
    return false;
}

export { endsWithOperator, hasLastNumberDot, isLastNumberZero };