import JobGiverDashboard from "./JobGiverDashboard";
import StudentDashboard from "./StudentDashboard";
import { useParams } from "react-router-dom";

export default function DashboardParent() {
    const { userRole } = useParams();
    
    const JobGivertasks = [
    {
      task: "Help with tax report",
      category: "Accounting",
      status: "Open",
      applicants: 3
    },
    {
      task: "Build landing page",
      category: "IT",
      status: "In Progress",
      applicants: 4
    }
  ];
  const StudentTasks = [
    {
      task: "Help with tax ",
      category: "Account",
      status: "Open",
      applicants: 1
    },
    {
      task: "Build landin",
      category: "IT",
      status: "In Progress",
      applicants: 2
    }
  ];

  if ( userRole === "jobGiver" ) {
    return <JobGiverDashboard tasks={JobGivertasks} />;
  }
  else if (userRole === "student")
  return <StudentDashboard tasks={StudentTasks} />;
}
  
