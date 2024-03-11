import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { employGet } from '../utils/Constants';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  .btn-outline-primary {
    background-color: #f4f4f4;
    --scriza-btn-color: #212b36;
    --scriza-btn-border-color: #cccccc;
    --scriza-btn-hover-color: #008479;
  }

  .btn {
    --scriza-btn-padding-x: 0.7rem;
    --scriza-btn-padding-y: 0.565rem;
    font-family: 'Open Sans', sans-serif;
    --scriza-btn-font-size: 13px;
    --scriza-btn-font-weight: 500;
    border-radius: 0.1rem;

  }
`;



const AllEmployes = () => {

    const [Employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployess();
    }, [])


    const getEmployess = async (e) => {
        const response = await employGet();
        console.log(response, "All Employes");
        try {
            if (response?.status === 200) {
                toast.success(response?.data?.message);
                setEmployees(response?.data?.data)
            } else {
                toast.error(response?.data?.message);
            }
        } catch (err) {
            toast.error(err?.message);
        }

    };


    const customStyle = {
        '--bs-breadcrumb-divider': "'>'",
    };

    return (
        <>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <nav className="p-2" style={customStyle} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Dashboard</Link>{" "}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg></li>
                                <li className="breadcrumb-item active" aria-current="page">Employees</li>
                                <li className="breadcrumb-item active" aria-current="page">All Employees</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-7 d-flex align-items-center justify-content-end gap-2">
                        <div className="mb-4 d-flex">
                            {/* <Icon icon="iconamoon:search" width="1.2em" height="1.2em" /> */}
                            <input style={{borderRadius: "0.1rem"}} type="search" className="form-control" placeholder="Search Files..." />
                        </div>
                        <StyledContainer>
                            <div className="btn-group mb-4" role="group" aria-label="Basic checkbox toggle button group">
                                {/* <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" /> */}
                                <label className="btn btn-outline-primary" >
                                    <Icon icon="fa-solid:file-csv" width="1.2em" height="1.2em" />
                                    Export to CSV
                                </label>

                                {/* <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" /> */}
                                <label className="btn btn-outline-primary" >
                                    <Icon icon="mdi:file-excel" width="1.2em" height="1.2em" />
                                    Export to Excel
                                </label>

                                {/* <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" /> */}
                                <label className="btn btn-outline-primary" >
                                    <Icon icon="material-symbols:print" width="1.2em" height="1.2em" />
                                    Print
                                </label>

                                {/* <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" /> */}
                                <label className="btn btn-outline-primary" >
                                    <Icon icon="bi:file-earmark-pdf-fill" width="1.2em" height="1.2em" />
                                    Export to PDF
                                </label>
                            </div>
                        </StyledContainer>
                    </div>
                </div>


                <div>
                    {/* <!-- row --> */}
                    <div class="row">
                        <div class="col-12">
                            {/* <!-- card --> */}
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table class="table text-nowrap mb-0 table-centered table-hover">
                                            <thead class="table-light">
                                                <tr>
                                                    <th class=" pe-0  ">
                                                        {/* <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="checkAll" />
                                                            <label class="form-check-label" for="checkAll">
                                                            </label>
                                                        </div> */}
                                                    </th>
                                                    <th class="ps-1">Order ID</th>
                                                    <th>Full Name</th>
                                                    <th>Work Phone</th>
                                                    <th>Work Email</th>
                                                    <th>Department</th>
                                                    <th>Job Position</th>
                                                    <th>Employee Type</th>
                                                    <th>Employment Status</th>
                                                    <th>Date of Hire</th>
                                                    <th><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <path d="M18.5 6H7.5M5.5 6H2.5M18.5 16H7.5M5.5 16H2.5M13.5 11H2.5M18.5 11H15.5M6.5 4C6.76522 4 7.01957 4.10536 7.20711 4.29289C7.39464 4.48043 7.5 4.73478 7.5 5V7C7.5 7.26522 7.39464 7.51957 7.20711 7.70711C7.01957 7.89464 6.76522 8 6.5 8C6.23478 8 5.98043 7.89464 5.79289 7.70711C5.60536 7.51957 5.5 7.26522 5.5 7V5C5.5 4.73478 5.60536 4.48043 5.79289 4.29289C5.98043 4.10536 6.23478 4 6.5 4ZM6.5 14C6.76522 14 7.01957 14.1054 7.20711 14.2929C7.39464 14.4804 7.5 14.7348 7.5 15V17C7.5 17.2652 7.39464 17.5196 7.20711 17.7071C7.01957 17.8946 6.76522 18 6.5 18C6.23478 18 5.98043 17.8946 5.79289 17.7071C5.60536 17.5196 5.5 17.2652 5.5 17V15C5.5 14.7348 5.60536 14.4804 5.79289 14.2929C5.98043 14.1054 6.23478 14 6.5 14ZM14.5 9C14.7652 9 15.0196 9.10536 15.2071 9.29289C15.3946 9.48043 15.5 9.73478 15.5 10V12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071C15.0196 12.8946 14.7652 13 14.5 13C14.2348 13 13.9804 12.8946 13.7929 12.7071C13.6054 12.5196 13.5 12.2652 13.5 12V10C13.5 9.73478 13.6054 9.48043 13.7929 9.29289C13.9804 9.10536 14.2348 9 14.5 9Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Employees?.length !== 0 ? (
                                                    Employees?.map((employ) => {
                                                        return (
                                                            <tr>
                                                                <td class=" pe-0">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="contactCheckbox2" />
                                                                        <label class="form-check-label" for="contactCheckbox2">
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td class="ps-1">
                                                                    <a href="#!">{employ?.employee_id}</a>
                                                                </td>
                                                                <td>{employ?.name}</td>
                                                                <td>{employ?.mobile}</td>
                                                                <td>{(employ?.work_email).slice(0, 20)}..</td>
                                                                <td>{employ?.department?.department_name}</td>
                                                                <td>{employ?.job_position}</td>
                                                                <td>Full-time</td>
                                                                {employ?.user?.status === 0 ? <td className='text text-center'><span class="badge bg-success">Active</span></td> : <td className='text text-center'><span class="badge bg-danger">Inactive</span></td>}
                                                                <td>{(employ?.created_at).slice(0, 10)}</td>
                                                                <td>
                                                                    <div class="dropdown">
                                                                        <a class="btn btn-icon btn-sm btn-ghost rounded-circle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical icon-xs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                            <li><a class="dropdown-item d-flex align-items-center" href="#!">View</a></li>
                                                                            <li><a class="dropdown-item d-flex align-items-center" href="#!">Edit</a>
                                                                            </li>
                                                                            <li><a class="dropdown-item d-flex align-items-center" href="#!">Delete</a></li>
                                                                        </ul>
                                                                    </div>

                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td style={{ textAlign: "center" }} colSpan={6}>
                                                            No data found
                                                        </td>
                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer d-md-flex justify-content-between align-items-center">
                                    <span>Showing 1 to 8 of 12 entries</span>
                                    <nav class="mt-2 mt-md-0">
                                        <ul class="pagination mb-0">
                                            <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                                            <li class="page-item"><a class="page-link active" href="#!">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default AllEmployes
