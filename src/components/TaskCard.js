import Card from 'react-bootstrap/Card';
export default function TaskCard({task}){
    return (
     <div>
 
        <Card className="w-50 p-4 mb-5">
           
          <a href={`/task/${task.id}`}>{task.title}</a>
          <p>{task.location}</p>
          <p>{task.category}</p>
          <p>{task.time}</p>
          <p>{task.descrition}</p>
          <p>{task.price}</p>
        </Card>
     </div>
        
    )
}