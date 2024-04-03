import React, { useState } from "react";
import Personalinfo from "../../components/forms/schoolLearner/personal info";
import Academicinfo from "../../components/forms/schoolLearner/academic";
import Submit from "../../components/forms/schoolLearner/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        StudentName: "",
        DateofBirth: "",
        phonenumber: "",
        email: "",
        StudentID: "",
        SchoolName: "",
        UDISECode: "",
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
                        <div className='h2 text-center hdmar ' style={{ color: '#fff' }}> REGISTRATION FORM</div>
                        <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3 trans' >{PageDisplay()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
