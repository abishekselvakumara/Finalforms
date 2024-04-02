import React, { useState } from "react";
import EntrepreneurInfo from "../../components/forms/entrepreneur/entrepreneur info";
import EntrepreneurRegion from "../../components/forms/entrepreneur/entrepreneur region";
import Submit from "../../components/forms/entrepreneur/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/dashBoard.css'
import '../../assets/styles/formStyles.css'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        IndustryName: "",
        Proof: "",
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
            return <EntrepreneurInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <EntrepreneurRegion formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
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
