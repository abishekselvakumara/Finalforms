import React, { useState } from "react";
import Personalinfo from "./personal info";
import Academicinfo from "./academic";
import Submit from "./submit";
import '../formstyle/formstyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        Name: "",
        DateofBirth: "",
        phonenumber: "",
        email: "",
        registerno: "",
        programme: "",
        course: "",
        semester: "",
        yearofstudy: "",
        yearofgraduate: "",
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
            <div className="b">
                <div className="transition-wrapper">{PageDisplay()}</div>
            </div>
        </>
    );
}

export default Form;
