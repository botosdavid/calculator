import { operators } from '../utils/data';

const endsWithOperator = (expression) => {
    const stringExpression = expression.toString();
    const lastCharacterOfExpression = stringExpression.slice(-1);
    return operators.includes(lastCharacterOfExpression);
}

export { endsWithOperator };