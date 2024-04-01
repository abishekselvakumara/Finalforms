import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js';
import Profile from './pages/profile.js'
import Register from './pages/registration.js'
// import Student from './forms/host student/HS-index.js';
import Visit from './forms/scheduleVisit/HS-index.js'
import HostStudent from './pages/hostStudent.js';
import HostFaculty from './pages/hostFaculty.js';
import ScheduleVisit from './pages/scheduleVisit.js'
import NoPage from './pages/noPage.js'
import Home from './pages/home.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register/hoststudent' element={<HostStudent/>}/>
        <Route path='/register/hostfaculty' element={<HostFaculty/>}/>
        <Route path='/schedulevisit' element={<ScheduleVisit/>}/>
        {/* <Route path='/host' element={<Student/>}/> */}
        <Route path='/visit' element={<Visit/>}/>
        <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
