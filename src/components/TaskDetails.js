import MockTasksData from "../data/MockTasksData";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = MockTasksData.find(t => t.id === Number(id));

  if (!task) {
    return <p>Task not found!</p>;
  }
  function handleApply(event){
    event.preventDefault();
    navigate("../ApplyTask")
  }

  return (
    <div>
      <h2><strong>{task.title}</strong></h2>
      <p>{task.description}</p>
      <p>{task.price}</p>
      <p>{task.postedBy}</p>
      <button onClick={handleApply}>Apply for the task</button>
    </div>
  );
}





