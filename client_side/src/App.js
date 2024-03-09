import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js'
import Student from './forms/host student/HS-index.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/hoststudent' element={<Student/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
