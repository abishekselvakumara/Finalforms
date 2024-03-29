import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js';
import Profile from './pages/profile.js'
import Register from './pages/registration.js'
import Student from './forms/host student/HS-index.js';
import Form from './pages/form.js';
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
        <Route path='/register/hoststudent' element={<Form/>}/>
        <Route path='/host' element={<Student/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
