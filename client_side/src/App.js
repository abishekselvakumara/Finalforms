import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js'
import Student from './forms/host student/HS-index.js'
import Form from './pages/form.js'
import Home from './pages/home.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hoststudent' element={<Student/>}/>
        <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
