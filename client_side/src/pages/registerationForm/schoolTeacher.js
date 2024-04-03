import React, { useState } from "react";
import PersonalInfo from "../../components/forms/schoolTeacher/personalInfo";
import AcademicInfo from "../../components/forms/schoolTeacher/academic";
import Submit from "../../components/forms/schoolTeacher/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        TeacherName: "",
        DateofBirth: "",
        phonenumber: "",
        email: "",
        TeacherID: "",
        InstituteName: "",
        UDISECode: "",
    });

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <AcademicInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
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
                        <div className='h2 text-center hdmar' style={{ color: '#fff' }}> REGISTRATION FORM</div>
                        <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
