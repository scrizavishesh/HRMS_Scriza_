import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { getDecutions } from '../utils/Constants';

const Deductions = () => {


    const [Deduction, setDeduction] = useState([]);

    useEffect(() => {
        GetLeavesAll();
    }, [])


    const GetLeavesAll = async () => {
        const response = await getDecutions();
        try {
            if (response?.status === 200) {
                toast.success(response?.data?.message);
                setDeduction(response?.data?.data)
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
                                <li className="breadcrumb-item active" aria-current="page">Payroll</li>
                                <li className="breadcrumb-item active" aria-current="page">Deduction</li>
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
                                    <th scope="col">No.</th>
                                    <th scope="col">Deduction Types</th>
                                    <th scope="col">Deduction Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action Button</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Deduction?.length !== 0 ? (
                                    Deduction?.map((employ, index) => {
                                        return (
                                            <tr>
                                                <th><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                                <td>{index + 1}</td>
                                                <td>{employ?.deduction_type}</td>
                                                <td>{employ?.deduction_amount}</td>
                                                <td>{employ?.status}</td>
                                                <td>
                                                    <div class="form-check form-switch d-flex justify-content-center">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </div>
                                                </td>
                                                <td className='d-flex justify-content-center gap-3' id='eyeOne'>
                                                    <Link>
                                                        <Icon icon="fluent:edit-20-regular" width="1rem" height="1rem" />
                                                        Edit
                                                    </Link>
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
                        <button type="button" class="btn btn-light mb-3">Add Row</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Deductions














