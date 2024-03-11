import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { getEmployee_Document } from '../utils/Constants';



const SharedFiles = () => {

    const [ShareDocument, setShareDocument] = useState([]);


    useEffect(() => {
        GetAnnouncement();
    }, [])


    const GetAnnouncement = async () => {
        const response = await getEmployee_Document();
        try {
            if (response?.status === 200) {
                toast.success(response?.data?.message);
                setShareDocument(response?.data?.data)
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className='p-2 mt-3' style={customStyle} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a>{" "}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg></li>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Leave Management</li>
                                <li className="breadcrumb-item active" aria-current="page">All Leave Request</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center gap-3" style={{ background: "#fff", overflowX: "auto" }}>
                        <table className="table text text-center">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Upload Date</th>
                                    <th scope="col">File Description</th>
                                    <th scope="col">Uploaded by </th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ShareDocument?.length !== 0 ? (
                                    ShareDocument?.map((employ, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src="./fileimage.png" alt="" />
                                            </td>
                                            <td>{employ?.uploaded_by}</td>
                                            <td>{employ?.uploaded_on.slice(0, 10)}</td>
                                            <td>{employ?.document_type}</td>
                                            <td>{employ?.uploaded_by}</td>
                                            <td>
                                                <div className="btn-group me-2 gap-2" role="group" aria-label="First group">
                                                    <div class="btn-group me-2 gap-2" role="group" aria-label="First group">
                                                        <button type="button" class="btn btn-outline-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5ZM10 14.1667C8.89493 14.1667 7.83512 13.7277 7.05372 12.9463C6.27232 12.1649 5.83333 11.1051 5.83333 10C5.83333 8.89493 6.27232 7.83512 7.05372 7.05372C7.83512 6.27232 8.89493 5.83333 10 5.83333C11.1051 5.83333 12.1649 6.27232 12.9463 7.05372C13.7277 7.83512 14.1667 8.89493 14.1667 10C14.1667 11.1051 13.7277 12.1649 12.9463 12.9463C12.1649 13.7277 11.1051 14.1667 10 14.1667ZM10 3.75C5.83333 3.75 2.275 6.34167 0.833332 10C2.275 13.6583 5.83333 16.25 10 16.25C14.1667 16.25 17.725 13.6583 19.1667 10C17.725 6.34167 14.1667 3.75 10 3.75Z" fill="black" />
                                                            </svg>
                                                        </button>
                                                        <button href={employ?.document}
                                                            download="Example-PDF-document"
                                                            target="_blank"
                                                            rel="noopener noreferrer" type="button" class="btn btn-outline-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M10.8333 2.5V10.4883L13.75 7.57167L14.9283 8.75L10 13.6783L5.07167 8.75L6.25 7.57167L9.16667 10.4883V2.5H10.8333ZM3.75 11.6667V15.8333H16.25V11.6667H17.9167V17.5H2.08333V11.6667H3.75Z" fill="black" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td style={{ textAlign: "center" }} colSpan={5}>
                                            No data found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SharedFiles
