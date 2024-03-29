import '../styles/dashBoard.css'
import TOPNAV from '../components/top-navigation.js'
import SIDENAV from '../components/side-nav.js'
import ScheduleVisitTable from '../components/dashboardTables/scheduleVisitTable.js'
import EquipmentReservationTable from '../components/dashboardTables/equipmentReservationTable.js'
import WorkOrder from '../components/dashboardTables/workOrderTable.js'
import SeedFundApplication from '../components/dashboardTables/seedFundApplicationTable.js'
import { useState } from 'react'

function Dashboard () {
  const [state, setActive] = useState(1)
  function DashboardTable () {
    if (state === 1) {
      return <ScheduleVisitTable />
    } else if (state === 2) {
      return <EquipmentReservationTable />
    } else if (state === 3) {
      return <WorkOrder />
    } else if (state === 4) {
      return <SeedFundApplication />
    }
  }
  return (
    <>
      <TOPNAV/>
      <div class='db-modal'>
        <SIDENAV />
        <div class='db-content'>
          <div class='main top-content'>
            <div class='scroll'>
              <div class='block-content' onClick={()=>{
                setActive(1)
              }}>
                <div class = "circle-wrapper">7</div>
                <div class='block d1'></div>
                <div class='text-wrapper'>Schedule Visit</div>
              </div>
              <div class='block-content' onClick={()=>{
                setActive(2)
              }}>
              <div class = "circle-wrapper">12</div>
                <div class='block'></div>
                <div class='text-wrapper'>Equipment Reservation</div>
              </div>
              <div class='block-content' onClick={()=>{
                setActive(3)
              }}>
              <div class = "circle-wrapper">8</div>
                <div class='block'></div>
                <div class='text-wrapper'>Work Order</div>
              </div>
              <div class='block-content' onClick={()=>{
                setActive(4)
              }}>
              <div class = "circle-wrapper">10</div>
                <div class='block'></div>
                <div class='text-wrapper'>Seed Fund Application</div>
              </div>
            </div>
          </div>
          <div class='table-model'>
            <div class='table-top'>
              <div class='table-heading'>
                <i
                  id='handleTables'
                  class='fa fa-angle-left previous-table'
                  onClick={() => {
                    if (state !== 1) {
                      setActive(state - 1)
                    }
                  }}
                ></i>
                <div class='table-title text-wrapper'>
                  {state === 1 && <>Schedule Visit</>}
                  {state === 2 && <>Equipment Reservation</>}
                  {state === 3 && <>Work Order</>}
                  {state === 4 && <>Seed Fund Application</>}
                </div>
                <i
                  id='handleTables'
                  class='fa fa-angle-right next-table'
                  onClick={() => {
                    if (state !== 4) {
                      setActive(state + 1)
                    }
                  }}
                ></i>
              </div>
            </div>
            {DashboardTable()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
