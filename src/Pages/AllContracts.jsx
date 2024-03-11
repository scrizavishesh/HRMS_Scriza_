import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { GetAllContract, GetRembursement } from '../utils/Constants';
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

const AllContracts = () => {


    const [AllContracts, setAllContracts] = useState([]);

    useEffect(() => {
        GetAllContracts();
    }, [])


    const GetAllContracts = async () => {
        const response = await GetAllContract();
        console.log(response, "response")
        try {
            if (response?.status === 200) {
                toast.success(response?.data?.message);
                setAllContracts(response?.data?.data)
            } else {
                toast.error(response?.data?.message);
            }
        } catch (err) {
            // toast.error(response?.data?.data?.data?.email[0]);
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
                                    <th scope="col">Employee</th>
                                    <th scope="col">Contract Reference</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Department Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllContracts?.length !== 0 ? (
                                    AllContracts?.map((employ) => {
                                        return (
                                            <tr>
                                                <th><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                                <td>{employ?.job_position}</td>
                                                <td>{employ?.contract_reference}</td>
                                                <td>{employ?.contract_start_date}</td>
                                                <td>{employ?.contract_end_date}</td>
                                                <td>{employ?.department_id}</td>
                                                <td className='d-flex gap-3'>
                                                    <div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M9.99967 7.5C9.33663 7.5 8.70075 7.76339 8.23191 8.23223C7.76307 8.70107 7.49967 9.33696 7.49967 10C7.49967 10.663 7.76307 11.2989 8.23191 11.7678C8.70075 12.2366 9.33663 12.5 9.99967 12.5C10.6627 12.5 11.2986 12.2366 11.7674 11.7678C12.2363 11.2989 12.4997 10.663 12.4997 10C12.4997 9.33696 12.2363 8.70107 11.7674 8.23223C11.2986 7.76339 10.6627 7.5 9.99967 7.5ZM9.99967 14.1667C8.89461 14.1667 7.8348 13.7277 7.0534 12.9463C6.272 12.1649 5.83301 11.1051 5.83301 10C5.83301 8.89493 6.272 7.83512 7.0534 7.05372C7.8348 6.27232 8.89461 5.83333 9.99967 5.83333C11.1047 5.83333 12.1646 6.27232 12.946 7.05372C13.7274 7.83512 14.1663 8.89493 14.1663 10C14.1663 11.1051 13.7274 12.1649 12.946 12.9463C12.1646 13.7277 11.1047 14.1667 9.99967 14.1667ZM9.99967 3.75C5.83301 3.75 2.27467 6.34167 0.833008 10C2.27467 13.6583 5.83301 16.25 9.99967 16.25C14.1663 16.25 17.7247 13.6583 19.1663 10C17.7247 6.34167 14.1663 3.75 9.99967 3.75Z" fill="black" />
                                                    </svg></div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M17.2583 5.8668C17.5833 5.5418 17.5833 5.00013 17.2583 4.6918L15.3083 2.7418C15 2.4168 14.4583 2.4168 14.1333 2.7418L12.6 4.2668L15.725 7.3918M2.5 14.3751V17.5001H5.625L14.8417 8.27513L11.7167 5.15013L2.5 14.3751Z" fill="black" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M5.83301 17.5C5.37467 17.5 4.98217 17.3367 4.65551 17.01C4.32884 16.6833 4.16579 16.2911 4.16634 15.8333V5H3.33301V3.33333H7.49967V2.5H12.4997V3.33333H16.6663V5H15.833V15.8333C15.833 16.2917 15.6697 16.6842 15.343 17.0108C15.0163 17.3375 14.6241 17.5006 14.1663 17.5H5.83301ZM7.49967 14.1667H9.16634V6.66667H7.49967V14.1667ZM10.833 14.1667H12.4997V6.66667H10.833V14.1667Z" fill="black" />
                                                        </svg>
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
            </div>

        </Container>
    )
}

export default AllContracts





