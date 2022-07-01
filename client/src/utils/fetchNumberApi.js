import { operators } from '../utils/data';
const url = 'http://localhost:8000';

const getNumberApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.message;
}             

const saveNumberApi = async (number) => {
    if(!number || number === '') return;
    const hasOperators = operators.some(operator => number.includes(operator));
    if(hasOperators) return;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: number })
    };
    await fetch(url, options);
}

export { getNumberApi, saveNumberApi };