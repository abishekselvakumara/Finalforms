import '../styles/registration.css'
import TOPNAV from '../components/top-navigation'
import SIDENAV from '../components/side-nav'

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
                <button onClick={() => { window.location.href = "/register/hoststudent" }}>Host Institute Student</button>
                <button onClick={() => { window.location.href = "/register/hostfaculty" }}>Host Institute Faculty</button>
                <button>Host Institute Alumni</button>
              </div>
              <div class='row-wrapper row-2'>
                <button>Other Institute Student</button>
                <button>Other Institute Faculty</button>
                <button>Entrepreneur/start-up</button>
              </div>
              <div class='row-wrapper row-3'>
                <button>School Learner</button>
                <button>School Teacher</button>
                <button>Industry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
