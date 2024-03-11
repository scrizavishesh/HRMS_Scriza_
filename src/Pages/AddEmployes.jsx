import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import styled from 'styled-components';
import { employAdd } from '../utils/Constants';


const Forms = styled.div`
.heading {
color: #000;
font-family: Open Sans;
font-size: 0.8375rem;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.sub-heading {
color: #000;
font-family: Open Sans;
font-size: 0.735rem;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.nav-color {
background: #0047F7;
color: #FFF;
font-family: Open Sans;
font-size: 1rem;
font-weight: 700;
}
.picture-container{
    position: relative;
    cursor: pointer;
    text-align: center;
}
.picture{
    width: 106px;
    height: 106px;
    background-color: #999999;
    border: 4px solid #CCCCCC;
    color: #FFFFFF;
    border-radius: 50%;
    margin: 0px auto;
    overflow: hidden;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
}
.picture:hover{
    border-color: #008479;
}
.content.ct-wizard-green .picture:hover{
    border-color: #05ae0e;
}
.content.ct-wizard-blue .picture:hover{
    border-color: #3472f7;
}
.content.ct-wizard-orange .picture:hover{
    border-color: #ff9500;
}
.content.ct-wizard-red .picture:hover{
    border-color: #ff3b30;
}
.picture input[type="file"] {
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0 !important;
    position: absolute;
    top: 0;
    width: 100%;
}

.picture-src{
    width: 100%; 
}
`

const AddEmployes = () => {

    const compID = localStorage.getItem('compID')
    const [profileImage, setprofileImage] = useState('');

    // Employee Personal Information: UseState 

    const [employeeName, setEmployeeName] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [rightEmail, setRightEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emergencyContactzNumber, setEmergencyContactNumber] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [temporaryAddress, setTemporaryAddress] = useState('');
    const [nationality, setNationality] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');


    const [employmentDocument, setEmploymentDocument] = useState([
        {
            document: "",
            document_type: "",
            document_number: "",
        },
    ]);
    console.log(employmentDocument, "doc");

    // const [documentType, setDocumentType] = useState(console.log(employmentDocument[0]?.documentType));
    // console.log(documentType, "hrllo");
    // const [documentNumber, setdocumentNumber] = useState(employmentDocument?.documentNumber);
    // const [uploadDocument, setUploadDocument] = useState(employmentDocument?.uploadDocument);


    // Employee Information: Usestate

    const [selectDepartment, setSelectDepartment] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [selectManager, setSelectManager] = useState('');
    const [workEmail, setWorkEmail] = useState('');

    // Approvers: UseState

    const [timeOff, setTimeOff] = useState('');
    const [timesheet, setTimesheet] = useState('');

    //    Schedule: useState

    const [workingHours, setWorkingHours] = useState('');
    const [timezone, setTimezone] = useState('');

    // Education: useState

    const [certificateLevel, setCertificateLevel] = useState('');
    const [fieldofStudy, setFieldofStudy] = useState('');
    const [school, setSchool] = useState('');
    const [educationDocument, setEducationDocument] = useState('');

    // Banking and Financial Information: UseState

    const [bankName, setBankName] = useState('');
    const [bankBranch, setBankBranch] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [IFSCCode, setIFSCCode] = useState('');

    // Payroll Information: useState

    const [annualSalary, setAnnualSalary] = useState(20000);
    const [payPeriod, setPayPeriod] = useState('');
    const [payRate, setPayRate] = useState('');
    const [payType, setPayType] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');


    const handleProfileImage = (value) => {
        setprofileImage(value);
        // e.preventDefault();
        // let reader = new FileReader();
        // let file = e.target.files[0];
        // if (!file?.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        //     setImageError(true);
        //     setimageIsRequiredlError(true);
        //     setImage("");
        // } else {
        //     reader.onloadend = () => {
        //         setprofileImage(file);
        //         setImagePreviewUrl(reader.result);
        //     };
        //     setImageError(false);
        //     setimageIsRequiredlError(false);
        // }
        // reader.readAsDataURL(file);
    }

    const handleEmployDocument = async () => {
        setEmploymentDocument([
            ...employmentDocument,
            {
                document: "",
                document_type: "",
                document_number: "",
            },
        ]);
    };

    const handleEmployDocumentChange = async (i, e) => {
        const value = [...employmentDocument];
        value[i][e.target.name] = e.target.value;
        console.log(e.target.name);
        setEmploymentDocument(value);
        // checkRecipientsValidationOnSubmit();
    };

    const removeEmployeRow = async (i) => {
        if (employmentDocument.length > 1) {
            employmentDocument.splice(i, 1);
            setEmploymentDocument([...employmentDocument]);
        }
    };


    const handleEmployeeName = (value) => {
        setEmployeeName(value);
    }
    const handleEmployeeEmail = (value) => {
        setEmployeeEmail(value);
        
    }
    const handleContactNumber = (value) => {
        setContactNumber(value);
    }
    const handleEmergencyContactzNumber = (value) => {
        setEmergencyContactNumber(value);
    }
    const handlePermanentAddress = (value) => {
        setPermanentAddress(value);
    }
    const handleTemporaryAddress = (value) => {
        setTemporaryAddress(value);
    }
    const handleNationality = (value) => {
        setNationality(value);
    }
    const handleMaritalStatus = (value) => {
        setMaritalStatus(value);
    }
    const handleBloodType = (value) => {
        setBloodType(value);
    }
    const handleGender = (value) => {
        setGender(value);
    }
    const handleDateOfBirth = (value) => {
        setDateOfBirth(value);
    }
    const handlePlaceOfBirth = (value) => {
        setPlaceOfBirth(value);
    }
    const handleSelectDepartment = (value) => {
        setSelectDepartment(value);
    }
    const handleJobPosition = (value) => {
        setJobPosition(value);
    }
    const handleSelectManager = (value) => {
        setSelectManager(value);
    }
    const handleWorkEmail = (value) => {
        setWorkEmail(value);
    }
    const handleTimeOff = (value) => {
        setTimeOff(value);
    }
    const handleTimesheet = (value) => {
        setTimesheet(value);
    }
    const handleWorkingHours = (value) => {
        setWorkingHours(value);
    }
    const handleTimezone = (value) => {
        setTimezone(value);
    }
    const handleCertificateLevel = (value) => {
        setCertificateLevel(value);
    }
    const handleFieldofStudy = (value) => {
        setFieldofStudy(value);
    }
    const handleSchool = (value) => {
        setSchool(value);
    }
    const handleEducationDocument = (value) => {
        setEducationDocument(value);
    }
    const handleBankName = (value) => {
        setBankName(value);
    }
    const handleBankBranch = (value) => {
        setBankBranch(value);
    }
    const handleAccountHolderName = (value) => {
        setAccountHolderName(value);
    }
    const handleAccountType = (value) => {
        setAccountType(value);
    }
    const handleAccountNumber = (value) => {
        setAccountNumber(value);
    }
    const handleIFSCCode = (value) => {
        setIFSCCode(value);
    }
    const handleAnnualSalary = (value) => {
        setAnnualSalary(value);
    }
    const handlePayPeriod = (value) => {
        setPayPeriod(value);
    }
    const handlePayRate = (value) => {
        setPayRate(value);
    }
    const handlePayType = (value) => {
        setPayType(value);
    }
    const handleHoursWorked = (value) => {
        setHoursWorked(value);
    }
    // const handle = () => {

    // }
    // const handle = () => {

    // }

    const AddEmployee = async (e) => {

        if ((employeeName !== "", employeeEmail !== "")) {
            const formData = new FormData();
            formData.append("profile_image", profileImage);
            formData.append("name", employeeName);
            formData.append("email", employeeEmail);
            formData.append("mobile", contactNumber);
            formData.append("emergency_mobile", emergencyContactzNumber);
            formData.append("permanent_address", permanentAddress);
            formData.append("temporary_address", temporaryAddress);
            formData.append("nationality", nationality);
            formData.append("marital_status", maritalStatus);
            formData.append("blood_type", bloodType);
            formData.append("gender", gender);
            formData.append("dob", dateOfBirth);
            formData.append("birth_place", placeOfBirth);
            formData.append("job_position", jobPosition);
            formData.append("manager", selectManager);
            formData.append("work_email", workEmail);
            formData.append("bank_name", bankName);
            formData.append("bank_branch", bankBranch);
            formData.append("account_holder_name", accountHolderName);
            formData.append("account_type", accountType);
            formData.append("account_nmber", accountNumber);
            formData.append("ifsc", IFSCCode);
            formData.append("company_id", compID);
            formData.append("pay_period", payPeriod);
            formData.append("pay_rate", payRate);
            formData.append("pay_type", payRate);
            formData.append("hours_worked", hoursWorked);
            // formData.append("overtime_pay", );
            formData.append("deductions", "yes");
            formData.append("net_pay", "5000");
            formData.append("documents", JSON.stringify(employmentDocument));
            // formData.append("document_number", documentNumber);
            // formData.append("documents", uploadDocument);
            formData.append("certificate_level", certificateLevel);
            formData.append("field_of_study", fieldofStudy);
            formData.append("department_id", selectDepartment);
            formData.append("time_off_approver", timeOff);
            formData.append("timesheet_approver", timesheet);
            formData.append("working_hours", workingHours);
            formData.append("timezone", timezone);
            formData.append("school_university", school);
            formData.append("certificates", educationDocument);
            formData.append("pay_type", payType);
            formData.append("annual_salary", annualSalary);
            try {
                const response = await employAdd(formData);
                console.log(response, "Add Em-loyee");
                if (response?.status === 200) {
                    toast.success(response?.data?.message);
                    // localStorage.setItem(
                    //     `HRMS token`,
                    //     JSON.stringify(response?.data?.data?.token)
                    // );

                    var Data = response?.data?.data;
                    var userSignin = CryptoJS.AES.encrypt(JSON.stringify(Data), 'dont spend on apple products @vishesh').toString();
                    localStorage.setItem(
                        "employee", userSignin
                    );
                    navigate("/allemployes");
                }
            } catch (err) {
                toast.error(err?.response?.data?.errors?.email[0]);
                toast.error(err?.response?.data?.error);
            }
        }

    };



    const customStyle = {
        '--bs-breadcrumb-divider': "'>'",
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className='p-2 mt-3 d-flex justify-content-between' style={customStyle} aria-label="breadcrumb">
                            <ol class=" col-6 breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Dashboard</a> {" "} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg></li>
                                <li class="breadcrumb-item active" aria-current="page">Employees</li>
                                <li class="breadcrumb-item active" aria-current="page">Add Employees</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 p-4" style={{ background: "#fff" }}>
                            <Forms>
                                <form>
                                    <div className=' top-0 end-0 d-flex justify-content-end '>
                                        <div class="picture-container">
                                            <div class="picture">
                                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="picture-src" id="wizardPicturePreview" title="" />
                                                <input type="file" id="wizard-picture" onChange={(e) => handleProfileImage(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='heading'>Employee Personal Information:</h5>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading" >Employee name*</label>
                                                <input onChange={(e) => handleEmployeeName(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Employee name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Employee Email*</label>
                                                <input onChange={(e) => handleEmployeeEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Employee Email' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Contact number*</label>
                                                <input onChange={(e) => handleContactNumber(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Contact number' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Emergency Contact number*</label>
                                                <input onChange={(e) => handleEmergencyContactzNumber(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Emergency Contact number' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Permanent Address*</label>
                                                <input onChange={(e) => handlePermanentAddress(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Permanent Address*' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Temporary Address (for remote or traveling employees)</label>
                                                <input onChange={(e) => handleTemporaryAddress(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Temporary Address (for remote or traveling employees)' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label class="form-label sub-heading">Select Nationality/Citizenship*</label>
                                                <select onChange={(e) => handleNationality(e.target.value)} class="form-select" placeholder='Select Nationality/Citizenship'>
                                                    <option>-----Select-----</option>
                                                    <option value="Indain">Indian</option>
                                                    <option value="Inda">India</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label class="form-label sub-heading">Select Marital Status</label>
                                                <select onChange={(e) => handleMaritalStatus(e.target.value)} class="form-select" placeholder='Select Marital Status'>
                                                    <option>-----Select-----</option>
                                                    <option value='Unmarried'>Unmarried</option>
                                                    <option value='married'>Married</option>
                                                    <option value='divorced'>Divorced</option>
                                                    <option value='widowed'>Widowed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label class="form-label sub-heading">Select Blood Type*</label>
                                                <select onChange={(e) => handleBloodType(e.target.value)} class="form-select" placeholder='Select Blood Type*'>
                                                    <option>-----Select-----</option>
                                                    <option value='A+'>A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value='B+'>B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="O+">O+</option>
                                                    <option value='O-'>O-</option>
                                                    <option value='AB+'>AB+</option>
                                                    <option value='AB-'>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label class="form-label sub-heading">Select Gender*</label>
                                                <select onChange={(e) => handleGender(e.target.value)} class="form-select" placeholder='Select Gender*'>
                                                    <option>-----Select-----</option>
                                                    <option value="Male">Male</option>
                                                    <option value='Female'>Female</option>
                                                    <option value='Others'>Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label sub-heading">Date of Birth</label>
                                                <input onChange={(e) => handleDateOfBirth(e.target.value)} type="date" class="form-control" id="exampleInputEmail1" placeholder='Date of Birth' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <label class="form-label sub-heading">Place of Birth</label>
                                                <select onChange={(e) => handlePlaceOfBirth(e.target.value)} class="form-select" placeholder='Place of Birth'>
                                                    <option value='Muzaffarnagar'>Muzaffarnagar</option>
                                                    <option value='Meerut'>Meerut</option>
                                                    <option value='Ghzaiabad'>Ghzaiabad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {employmentDocument.map((documentField, i) => {
                                        return (
                                            <div className="row">
                                                <div className="col-3">
                                                    <div class="mb-3">
                                                        <label class="form-label sub-heading">Document type</label>
                                                        <select
                                                            value={documentField.document_type}
                                                            name='document_type'
                                                            onChange={(e) => handleEmployDocumentChange(i, e)}
                                                            class="form-select"
                                                            placeholder='Document type'>
                                                            <option>-----Select-----</option>
                                                            <option value='AdharCard'>Adharcard</option>
                                                            <option value='Pancard'>Pancard</option>
                                                            <option value='Marksheet'>10th Marksheet</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div class="mb-3">
                                                        <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label sub-heading">Document number</label>
                                                            <input value={documentField.document_number}
                                                                onChange={(e) => handleEmployDocumentChange(i, e)}
                                                                type="text"
                                                                name='document_number'
                                                                class="form-control" id="exampleInputEmail1" placeholder='Document number' aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading">Upload Document</label>
                                                    <div class="input-group mb-3">
                                                        <input value={documentField.document}
                                                        name='document'
                                                            onChange={(e) => handleEmployDocumentChange(i, e)} type="file" class="form-control" placeholder='Upload Document' aria-label="file example" required />
                                                    </div>
                                                </div>
                                                <div className='mb-2 d-flex justify-content-between'>
                                                    <a onClick={handleEmployDocument}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 23" fill="none">
                                                            <path d="M11.5 0.5625C8.61002 0.597367 5.84824 1.7609 3.80457 3.80457C1.7609 5.84824 0.597367 8.61002 0.5625 11.5C0.597367 14.39 1.7609 17.1518 3.80457 19.1954C5.84824 21.2391 8.61002 22.4026 11.5 22.4375C14.39 22.4026 17.1518 21.2391 19.1954 19.1954C21.2391 17.1518 22.4026 14.39 22.4375 11.5C22.4026 8.61002 21.2391 5.84824 19.1954 3.80457C17.1518 1.7609 14.39 0.597367 11.5 0.5625ZM17.75 12.2812H12.2812V17.75H10.7188V12.2812H5.25V10.7188H10.7188V5.25H12.2812V10.7188H17.75V12.2812Z" fill="#0047F7" />
                                                        </svg>
                                                    </a>
                                                    {employmentDocument.length > 1 && (
                                                        <a
                                                            className="btnn closeBtn mr-4 "
                                                            onClick={(e) => removeEmployeRow(i)}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <g clip-path="url(#clip0_2007_4)">
                                                                    <path d="M10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM15 9H5V11H15V9Z" fill="#0047F7" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_2007_4">
                                                                        <rect width="20" height="20" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                        );
                                    })}

                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='heading'>Employee Information:</h5>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Add Employee Information
                                        </a>
                                    </div>
                                    <br />
                                    <div class="collapse" id="collapseExample">
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Select Department*</label>
                                                    <select onChange={(e) => handleSelectDepartment(e.target.value)} class="form-select" placeholder='Select Department'>
                                                        <option>-----Select-----</option>
                                                        <option value='1'>HR</option>
                                                        <option value='2'>IT</option>
                                                        <option value='3'>HR</option>
                                                        <option value='4'>HR</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Job Position*</label>
                                                    <input onChange={(e) => handleJobPosition(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Job Position' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Select Manager*</label>
                                                    <select onChange={(e) => handleSelectManager(e.target.value)} class="form-select" placeholder='Select Manager'>
                                                        <option>-----Select-----</option>
                                                        <option value='juhi'>juhi</option>
                                                        <option value='juhi'>juhi</option>
                                                        <option value='juhi'>juhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Work Email*</label>
                                                    <input onChange={(e) => handleWorkEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Work Email' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='heading'>Approvers:</h5>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Add Approvers
                                        </a>
                                    </div>
                                    <br />
                                    <div class="collapse" id="collapseExample1">
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Time Off*</label>
                                                    <select onChange={(e) => handleTimeOff(e.target.value)} class="form-select" placeholder='Time Off'>
                                                        <option>-----Select-----</option>
                                                        <option value='day'>Day</option>
                                                        <option value='half'>Half</option>
                                                        <option value='end'>End</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Timesheet*</label>
                                                    <select onChange={(e) => handleTimesheet(e.target.value)} class="form-select" placeholder='Timesheet'>
                                                        <option>-----Select-----</option>
                                                        <option value='day'>Day</option>
                                                        <option value='half'>Half</option>
                                                        <option value='end'>End</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Working Hours*</label>
                                                    <select onChange={(e) => handleWorkingHours(e.target.value)} class="form-select" placeholder='Working Hours'>
                                                        <option>-----Select-----</option>
                                                        <option value='24hours'>24hours</option>
                                                        <option value='24hours'>24hours</option>
                                                        <option value='24hours'>24hours</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Timezone*</label>
                                                    <select onChange={(e) => handleTimezone(e.target.value)} class="form-select" placeholder='Timezone*'>
                                                        <option>-----Select-----</option>
                                                        <option value="10:30 to 7:30">10:30 to 7:30</option>
                                                        <option value="10:30 to 7:30">10:30 to 7:30</option>
                                                        <option value="10:30 to 7:30">10:30 to 7:30</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='heading'>Education:</h5>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Add Education
                                        </a>
                                    </div>

                                    <br />
                                    <div class="collapse" id="collapseExample2">
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Certificate Level</label>
                                                    <select onChange={(e) => handleCertificateLevel(e.target.value)} class="form-select" placeholder='Certificate Level'>
                                                        <option>-----Select-----</option>
                                                        <option value='High School'>High School</option>
                                                        <option value='Intermediate'>Intermediate</option>
                                                        <option value='Graduation'>Graduation</option>
                                                        <option value='Post Graduation'>Post Graduation</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Field of Study</label>
                                                    <input onChange={(e) => handleFieldofStudy(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Field of Study' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >School / University </label>
                                                    <input onChange={(e) => handleSchool(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='School / University ' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Upload Document</label>
                                                    <input onChange={(e) => handleEducationDocument(e.target.value)} type="file" class="form-control" id="exampleInputEmail1" placeholder='Upload Document' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='heading'>Banking and Financial Information:</h5>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Add Banking and Financial Information
                                        </a>
                                    </div>
                                    <br />
                                    <div class="collapse" id="collapseExample3">
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Bank Name</label>
                                                    <input onChange={(e) => handleBankName(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Bank Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading">Bank Branch</label>
                                                    <input onChange={(e) => handleBankBranch(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Bank Branch' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading">Account Holder name</label>
                                                    <input onChange={(e) => handleAccountHolderName(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Account Holder name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading">Account Type</label>
                                                    <input onChange={(e) => handleAccountType(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Account Type' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Account Number</label>
                                                    <input onChange={(e) => handleAccountNumber(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Account Number' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading">IFSC Code</label>
                                                    <input onChange={(e) => handleIFSCCode(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='IFSC Code' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='heading'>Payroll Information:</h5>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Add Payroll Information
                                        </a>
                                    </div>
                                    <br />
                                    <div class="collapse" id="collapseExample4">
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label sub-heading" >Annual Salary </label>
                                                    <input onChange={(e) => handleAnnualSalary(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder='Annual Salary ' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Select Pay Period</label>
                                                    <select onChange={(e) => handlePayPeriod(e.target.value)} class="form-select" placeholder='Select Pay Period'>
                                                        <option>-----Select-----</option>
                                                        <option value='Janurary'>January</option>
                                                        <option value='Janurary'>January</option>
                                                        <option value='Janurary'>January</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Pay Rate</label>
                                                    <select onChange={(e) => handlePayRate(e.target.value)} class="form-select" placeholder='Pay Rate'>
                                                        <option>-----Select-----</option>
                                                        <option value='30%'>30%</option>
                                                        <option value='20%'>20%</option>
                                                        <option value='10%'>10%</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Select Pay Type</label>
                                                    <select onChange={(e) => handlePayType(e.target.value)} class="form-select" placeholder='Select Pay Type'>
                                                        <option>-----Select-----</option>
                                                        <option value='credit'>Credit</option>
                                                        <option value='debit'>Debit</option>
                                                        <option value='salery'>Salery</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div class="mb-3">
                                                    <label class="form-label sub-heading">Hours Worked</label>
                                                    <select onChange={(e) => handleHoursWorked(e.target.value)} class="form-select" placeholder='Hours Worked'>
                                                        <option>-----Select-----</option>
                                                        <option value={12}>12 Hours</option>
                                                        <option value={24}>24 Hours</option>
                                                        <option value={36}>36 Hours</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Deductions / Allowances</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Federal Income Tax</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Deductions / Allowances</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Deductions / Allowances</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Deductions / Allowances</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div class="mb-3">
                                                <input class=" form-check-input mt-1 mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <label class=" form-label sub-heading">Deductions / Allowances</label>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            <h6>Net Pay</h6>
                                            <div class="border border-success p-2 mb-2 nav-color">₹ 00.00</div>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button type="button" class="btn btn-dark">Cancel</button>
                                            <button type="button" onClick={AddEmployee} class="btn btn-warning">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </Forms>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddEmployes
