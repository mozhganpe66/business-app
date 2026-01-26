import MockTasksData from '../data/MockTasksData';
import TaskCard from './TaskCard';
export default function Tasks(){
    return (
        <div>
        <h3 className="px-4 pt-3">Web development Tasks</h3>
            {MockTasksData.map(task =>(
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}