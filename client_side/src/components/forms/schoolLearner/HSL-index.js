import React, { useState } from "react";
import PersonalInfo from "./personalInfo";
import AcademicInfo from "./academic";
import Submit from "./submit";
import '../../../assets/styles/formStyles.css'

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
            return <PersonalInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <AcademicInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else {
            return <Submit formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        }
    };

    return (
        <>
            <div className="b">
                <div className="transition-wrapper">{PageDisplay()}</div>
            </div>
        </>
    );
}

export default Form;
