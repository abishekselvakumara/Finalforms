import '../assets/styles/registration.css'
import TOPNAV from '../components/top-navigation'
import SIDENAV from '../components/side-nav'
import { Link } from 'react-router-dom'

function Register () {
  return (
    <>
      <TOPNAV />
      <div class='reg-modal'>
        <SIDENAV />
        <div class='reg-content'>
          <div class='category'>
            <div class='text-wrapper header'>Select Category</div>
            <div class='content-wrapper reg-btns'>
              <div class='row-wrapper row-1'>
               <Link to="/register/hoststudent" className='regbutn'>Host Institute Student</Link> 
                <Link to="/register/hostfaculty" className='regbutn'>Host Institute Faculty</Link>
                <Link to="/register/hostalumini" className='regbutn'>Host Institute Alumni</Link>
              </div>
              <div class='row-wrapper row-2'>
                <Link to="/register/otherstudent" className='regbutn'>Other Institute Student</Link>
                <Link to="/register/otherfaculty" className='regbutn'>Other Institute Faculty</Link>
                <Link to="/register/entrepreneur" className='regbutn'>Entrepreneur/start-up</Link>
              </div>
              <div class='row-wrapper row-3'>
                <Link to="/register/hostfaculty" className='regbutn'>School Learner</Link>
                <Link to="/register/hostfaculty" className='regbutn'>School Teacher</Link>
                <Link to="/register/hostfaculty" className='regbutn'>Industry</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
