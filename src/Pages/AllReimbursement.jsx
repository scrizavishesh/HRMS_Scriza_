import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { GetRembursement } from '../utils/Constants';
import styled from 'styled-components';


const Container = styled.div`
.small-button {
            display: inline-flex;
            align-items: center;
            padding: 6px 6px;
            font-size: 9px;
            line-height: 1.5;
            border-radius: 4px;
            border: 1px solid #008479;
            color: #008479;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            background-color: transparent;
        }

        .small-button .icon {
            margin-right: 6px; /* Adjust the gap as needed */
        }

        .small-button:hover {
            background-color: #008479;
            color: #fff;
        }

        @media (max-width: 768px) {
    .small-button {
      /* Adjust styles for smaller screens */
      font-size: 12px;
      /* Add more responsive styles as needed */
    }
}

`

const AllReimbursement = () => {


    const [AllReimbursements, setAllReimbursements] = useState([]);

    useEffect(() => {
        GetAllReimbursements();
    }, [])


    const GetAllReimbursements = async () => {
        const response = await GetRembursement();
        console.log(response, "response")
        try {
            if (response?.status === 200) {
                toast.success(response?.data?.message);
                setAllReimbursements(response?.data?.data)
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
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className='p-2 mt-3' style={customStyle} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a>{" "}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg></li>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Reimbursement</li>
                                <li className="breadcrumb-item active" aria-current="page">Request Reimbursement</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12" style={{ background: "#fff", overflowX: "auto" }}>
                        <table className="table text text-center">
                            <thead>
                                <tr>
                                    <th scope="col"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Employee Designation</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Reimbursement Amt.</th>
                                    <th scope="col">Remark</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                    <th scope="col"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path d="M18.5 6H7.5M5.5 6H2.5M18.5 16H7.5M5.5 16H2.5M13.5 11H2.5M18.5 11H15.5M6.5 4C6.76522 4 7.01957 4.10536 7.20711 4.29289C7.39464 4.48043 7.5 4.73478 7.5 5V7C7.5 7.26522 7.39464 7.51957 7.20711 7.70711C7.01957 7.89464 6.76522 8 6.5 8C6.23478 8 5.98043 7.89464 5.79289 7.70711C5.60536 7.51957 5.5 7.26522 5.5 7V5C5.5 4.73478 5.60536 4.48043 5.79289 4.29289C5.98043 4.10536 6.23478 4 6.5 4ZM6.5 14C6.76522 14 7.01957 14.1054 7.20711 14.2929C7.39464 14.4804 7.5 14.7348 7.5 15V17C7.5 17.2652 7.39464 17.5196 7.20711 17.7071C7.01957 17.8946 6.76522 18 6.5 18C6.23478 18 5.98043 17.8946 5.79289 17.7071C5.60536 17.5196 5.5 17.2652 5.5 17V15C5.5 14.7348 5.60536 14.4804 5.79289 14.2929C5.98043 14.1054 6.23478 14 6.5 14ZM14.5 9C14.7652 9 15.0196 9.10536 15.2071 9.29289C15.3946 9.48043 15.5 9.73478 15.5 10V12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071C15.0196 12.8946 14.7652 13 14.5 13C14.2348 13 13.9804 12.8946 13.7929 12.7071C13.6054 12.5196 13.5 12.2652 13.5 12V10C13.5 9.73478 13.6054 9.48043 13.7929 9.29289C13.9804 9.10536 14.2348 9 14.5 9Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllReimbursements?.length !== 0 ? (
                                    AllReimbursements?.map((employ) => {
                                        return (
                                            <tr>
                                                <th><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                                <td>{employ?.employee_id}</td>
                                                <td>{employ?.employee_name}</td>
                                                <td>{employ?.employee_designation}</td>
                                                <td>{employ?.created_at.slice(0, 10)}</td>
                                                <td>{employ?.amount}</td>
                                                <td>{employ?.remark}</td>
                                                <td>
                                                    <a href="#" class="small-button">
                                                        <svg class="icon" width="18" height="18" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54166 1.54167H2.45833C2.27047 1.54167 2.0903 1.61629 1.95746 1.74913C1.82462 1.88197 1.74999 2.06214 1.74999 2.25V10.75C1.74999 10.9379 1.82462 11.118 1.95746 11.2509C2.0903 11.3837 2.27047 11.4583 2.45833 11.4583H9.54166C9.72952 11.4583 9.90969 11.3837 10.0425 11.2509C10.1754 11.118 10.25 10.9379 10.25 10.75V2.25C10.25 2.06214 10.1754 1.88197 10.0425 1.74913C9.90969 1.61629 9.72952 1.54167 9.54166 1.54167ZM2.45833 0.125C1.89474 0.125 1.35424 0.348883 0.955726 0.747398C0.557212 1.14591 0.333328 1.68641 0.333328 2.25V10.75C0.333328 11.3136 0.557212 11.8541 0.955726 12.2526C1.35424 12.6511 1.89474 12.875 2.45833 12.875H9.54166C10.1052 12.875 10.6457 12.6511 11.0443 12.2526C11.4428 11.8541 11.6667 11.3136 11.6667 10.75V2.25C11.6667 1.68641 11.4428 1.14591 11.0443 0.747398C10.6457 0.348883 10.1052 0.125 9.54166 0.125H2.45833Z" fill="#008479" />
                                                            <path d="M3.16666 2.95801H8.83332V4.37467H3.16666V2.95801ZM3.16666 5.79134H8.83332V7.20801H3.16666V5.79134ZM3.16666 8.62467H6.70832V10.0413H3.16666V8.62467Z" fill="#008479" />
                                                        </svg>
                                                        View Bills
                                                    </a>
                                                </td>
                                                <td>
                                                    <div class="btn-group-sm gap-2" role="group" aria-label="Basic mixed styles example">
                                                        <button type="button" class="btn btn-warning">In Review</button>
                                                        <button type="button" class="btn btn-danger">Approved</button>
                                                        <button type="button" class="btn btn-success">Rejected</button>
                                                    </div>
                                                </td>
                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z" fill="black" />
                                                    <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="black" />
                                                    <path d="M10 7C11.1046 7 12 6.10457 12 5C12 3.89543 11.1046 3 10 3C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7Z" fill="black" />
                                                </svg></td>
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
            </div>

        </Container>
    )
}

export default AllReimbursement





