import React, { useState } from "react";
import Personalinfo from "./industryInfo";
import Academicinfo from "./industryRegion";
import Submit from "./submit";
import '../formstyle/formstyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        IndustryName: "",
        GSTNumber: "",
        phonenumber: "",
        email: "",
        Website: "",
        Streetname: "",
        City: "",
        District: "",
        State: "",
        Pincode: "",

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
