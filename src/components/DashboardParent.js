import JobGiverDashboard from "./JobGiverDashboard";
import StudentDashboard from "./StudentDashboard";
import { useParams } from "react-router-dom";

export default function DashboardParent({tasks}) {
    const { userRole } = useParams();
    

  if ( userRole === "jobGiver" ) {
    return <JobGiverDashboard tasks={tasks} />;
  }
  else if (userRole === "student")
  return <StudentDashboard tasks={tasks} />;
}
  
