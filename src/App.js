
import Header from './components/Header';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import Login from './components/Login';
import Ad from './components/Ad';
import UserProfile from './components/UserProfile';
import {Route, Routes} from 'react-router-dom';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';
import ApplyTask from './components/ApplyTask';
import BidSubmitted from './components/BidSubmitted';
import AreYouSure from './components/AreYouSure';
import Dashboard from './components/Dashboard';

function App() {
  return (
   <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/userProfile" element={<UserProfile/>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/applyTask" element={<ApplyTask />} />
        <Route path="/bidSubmitted" element={<BidSubmitted />} />
        <Route path="/areyousure" element={<AreYouSure />} />

      </Routes>
    </div>
  )

}

export default App;
