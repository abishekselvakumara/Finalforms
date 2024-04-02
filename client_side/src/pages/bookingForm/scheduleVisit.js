import React, { useState } from "react";
import Personalinfo from "../../components/forms/scheduleVisit/personal info";
import Academicinfo from "../../components/forms/scheduleVisit/academic";
import Submit from "../../components/forms/scheduleVisit/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/dashBoard.css'
import '../../assets/styles/formStyles.css'

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
      <div class='form-modal'>
        <SideNav />
        <div className='form-content'>
          <div style={{ width: '95%' }}>
            <div className='h2 text-center hdmar' style={{ color: '#fff' }}> Schedule Visit</div>
            <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Form;