import Button from './Button';

const TaskButtons = ({ tasks }) => {
    return (
        <>
        { tasks.map((task, index) => (
                            <Button text={task} onClick={null} key={index} />
                        )) 
                    }
        </>
    )
}

export default TaskButtons;