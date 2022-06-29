import Button from './Button';
import useCalculator from '../contexts/CalculatorContext';
import { getNumberApi, saveNumberApi } from '../utils/getNumberApi';

const TaskButtons = ({ tasks }) => {
    const [ state, dispatch ] = useCalculator();

    const getNumberFromApi = async () => {
        const number = await getNumberApi();
        dispatch({ type: 'GET', payload: number });
    }

    const executeTask = (task) => {
        switch(task){
            case 'CE': dispatch({ type: task }); break;
            case 'GET': getNumberFromApi(); break;
            case 'SAVE': saveNumberApi(state.number); break;
            default: break;
        }
    }
   
    return (
        <>
            {   
                tasks.map((task, index) => (
                    <Button text={task} onClick={() => executeTask(task)} key={index} />
                )) 
            }
        </>
    )
}

export default TaskButtons;