import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js';
import Profile from './pages/profile.js'
import Register from './pages/registration.js'
import HostStudent from './pages/registerationForm/hostStudent.js';
import HostFaculty from './pages/registerationForm/hostFaculty.js';
import HostAlumini from './pages/registerationForm/hostAlumini.js';
import Entrepreneur from './pages/registerationForm/Entrepreneur.js';
import OtherStudent from './pages/registerationForm/otherStudent.js';
import OtherFaculty from './pages/registerationForm/otherFaculty.js';
import SchoolLearner from './pages/registerationForm/schoolLearner.js';
import SchoolTeacher from './pages/registerationForm/schoolTeacher.js';
import Industry from './pages/registerationForm/industry.js';
import ScheduleVisit from './pages/bookingForm/scheduleVisit.js';
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
        <Route path='/register/hostalumini' element={<HostAlumini/>}/>
        <Route path='/register/entrepreneur' element={<Entrepreneur/>}/>
        <Route path='/register/otherstudent' element={<OtherStudent/>}/>
        <Route path='/register/otherfaculty' element={<OtherFaculty/>}/>
        <Route path='/register/schoollearner' element={<SchoolLearner/>}/>
        <Route path='/register/Schoolteacher' element={<SchoolTeacher/>}/>
        <Route path='/register/industry' element={<Industry/>}/>
        <Route path='/schedulevisit' element={<ScheduleVisit/>}/>
        <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
