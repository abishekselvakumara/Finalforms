import React, { useState } from "react";
import Personalinfo from "../forms/scheduleVisit/personal info";
import Academicinfo from "../forms/scheduleVisit/academic";
import Submit from "../forms/scheduleVisit/submit";
import TopNav from '../components/top-navigation'
import SideNav from '../components/side-nav'
import '../styles/dashBoard.css'
import '../styles/formstyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        DateofVisit: "",
        InTime: "",
        Purpose: "",
        Visitors: "",
        Accommodation: "",
        NoOfDays: "",
        inTime: "",
        outTime: "",
    });


    const PageDisplay = () => {
        if (page === 0) {
            return <Personalinfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Academicinfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else {
            return <Submit formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        }
    };

  return (
    <>
      <TopNav />
      <div class='db-modal'>
        <SideNav />
        <div className='db-content' style={{ paddingBottom: '0px' }}>
          <div style={{ width: '95%' }}>
            <div className='h2 text-center mt-3 mb-3' style={{ color: '#fff' }}> Schedule Visit</div>
            <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Form;