import React, { useState } from "react";
import Detail from "./detail";
import Accommodation from "./accommodation";
import Submit from "./submit";
import '../formstyle/formstyles.css'

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
            return <Detail formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Accommodation formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else {
            return <Submit formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        }
    };

    return (
        <>
            
                <div className="transition-wrapper">{PageDisplay()}</div>
            
        </>
    );
}

export default Form;
