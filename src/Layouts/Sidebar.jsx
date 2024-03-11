import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
[data-simplebar] {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start
}

.simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit
}

.simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto!important;
    height: auto!important;
    z-index: 0
}

.simplebar-offset {
    direction: inherit!important;
    box-sizing: inherit!important;
    resize: none!important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch
}

.simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box!important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar {
    width: 0;
    height: 0
}

.simplebar-content:after,.simplebar-content:before {
    content: ' ';
    display: table
}

.simplebar-placeholder {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none
}

.simplebar-height-auto-observer-wrapper {
    box-sizing: inherit!important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0
}

.simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1
}

.simplebar-track {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden
}

[data-simplebar].simplebar-dragging .simplebar-content {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none
}

[data-simplebar].simplebar-dragging .simplebar-track {
    pointer-events: all
}

.simplebar-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 10px
}

.simplebar-scrollbar:before {
    position: absolute;
    content: '';
    background: #000;
    border-radius: 7px;
    left: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity .2s linear
}

.simplebar-scrollbar.simplebar-visible:before {
    opacity: .5;
    transition: opacity 0s linear
}

.simplebar-track.simplebar-vertical {
    top: 0;
    width: 11px
}

.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px
}

.simplebar-track.simplebar-horizontal {
    left: 0;
    height: 11px
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
    height: 100%;
    left: 2px;
    right: 2px
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    right: auto;
    left: 0;
    top: 2px;
    height: 7px;
    min-height: 0;
    min-width: 10px;
    width: auto
}

[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical {
    right: auto;
    left: 0
}

.hs-dummy-scrollbar-size {
    direction: rtl;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    height: 500px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: scroll
}

.simplebar-hide-scrollbar {
    position: fixed;
    left: 0;
    visibility: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none
}

`;
const Sidebar = () => {



    const [activeLink, setActiveLink] = useState('');
    const [isEmployeesCollapsed, setIsEmployeesCollapsed] = useState(true);
    const [isAttendancesCollapsed, setIsAttendancesCollapsed] = useState(true);
    const [isLeaveManagementCollapsed, setIsLeaveManagementCollapsed] = useState(true);
    const [isAppraisalsCollapsed, setIsAppraisalsCollapsed] = useState(true);
    const [isReimbursementCollapsed, setIsReimbursementCollapsed] = useState(true);
    const [isPayrollManagementCollapsed, setIsPayrollManagementCollapsed] = useState(true);
    const [isMyDocumentsCollapsed, setIsMyDocumentsCollapsed] = useState(true);
    const [isAnnouncementCollapsed, setIsAnnouncementCollapsed] = useState(true);

    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const handleToggleMenu = () => setIsMenuCollapsed(!isMenuCollapsed);


    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }

        const storedIsMenuCollapsed = localStorage.getItem('isMenuCollapsed');
        if (storedIsMenuCollapsed) {
            setIsMenuCollapsed(storedIsMenuCollapsed === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
        localStorage.setItem('isMenuCollapsed', isMenuCollapsed);
    }, [activeLink, isEmployeesCollapsed, isAttendancesCollapsed, isLeaveManagementCollapsed, isAppraisalsCollapsed, isReimbursementCollapsed, isPayrollManagementCollapsed, isMyDocumentsCollapsed, isAnnouncementCollapsed]);

    const handleToggleEmployeesMenu = () => {
        setIsEmployeesCollapsed(!isEmployeesCollapsed);
    };

    const handleToggleAttendancesMenu = () => {
        setIsAttendancesCollapsed(!isAttendancesCollapsed);
    };

    const handleToggleLeaveManagement = () => {
        setIsLeaveManagementCollapsed(!isLeaveManagementCollapsed);
    };

    const handleToggleAppraisals = () => {
        setIsAppraisalsCollapsed(!isAppraisalsCollapsed);
    };

    const handleToggleReimbursement = () => {
        setIsReimbursementCollapsed(!isReimbursementCollapsed);
    };

    const handleTogglePayrollManagement = () => {
        setIsPayrollManagementCollapsed(!isPayrollManagementCollapsed);
    };

    const handleToggleMyDocuments = () => {
        setIsMyDocumentsCollapsed(!isMyDocumentsCollapsed);
    };

    const handleToggleAnnouncement = () => {
        setIsAnnouncementCollapsed(!isAnnouncementCollapsed);
    };

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };





    return (
        <Container>
            <div class="app-menu">
                {/* <!-- Sidebar --> */}

                <div class="navbar-vertical navbar nav-dashboard">
                    <div class="h-100" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: "0px" }}>
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer">
                            </div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "100%", overflow: "hidden scroll" }}>
                                    <div class="simplebar-content" style={{ padding: "0px" }}>
                                        {/* <!-- Brand logo --> */}
                                        <Link class="navbar-brand" to="/">
                                            <svg width="150" height="20" viewBox="0 0 154 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M71.8183 15.0443C71.8183 15.0443 68.2349 26.4881 55.5012 23.4548C53.3772 22.9489 51.4238 21.9335 49.9057 20.4693C48.1974 18.821 46.4723 16.2126 46.2353 12.3051C46.2176 11.9907 46.2327 11.6755 46.2802 11.3638C46.5122 9.78121 47.3627 2.21637 56.9678 0.280881C56.9678 0.280881 62.8848 -1.12528 68.4085 2.83727C68.4335 2.81412 69.5475 3.57524 70.1238 3.73591C70.1238 3.75872 70.8848 3.75872 70.8848 3.75872V9.07444L70.4499 9.03385C70.4499 9.03385 67.5145 0.694812 58.9524 1.52436C58.9524 1.4784 50.4914 2.98889 50.2909 11.6546C50.2909 11.6546 49.8561 21.3901 59.9714 22.5253C61.0077 22.6452 62.0593 22.5789 63.0685 22.33C65.393 21.748 69.4783 20.0373 71.4951 15.0443C71.5201 15.0902 71.8183 15.0443 71.8183 15.0443Z" fill="black" />
                                                <path d="M40.0332 22.2178C32.4554 26.9502 24.1872 20.8009 24.1872 20.8009L23.5526 20.7318L24.1872 13.4578C24.1872 13.4578 24.6536 13.4417 24.6815 13.4578C23.9795 17.5867 26.3949 19.6993 26.2913 19.6993C29.945 23.7581 35.0614 22.5277 35.0614 22.5046C41.4872 20.9159 39.1113 15.6408 39.037 15.6408C37.3699 13.1072 30.6767 11.582 30.6767 11.582C24.729 10.103 24.7275 6.44974 24.7025 6.40446C24.1792 -0.115823 32.9896 0.0465309 32.9399 0.0237209C37.2956 -0.278175 41.0034 2.40132 41.0034 2.40132H41.5252L41.5383 6.72649C41.5383 6.72649 41.227 6.70334 41.202 6.72649C40.8301 0.947525 33.963 1.25277 33.963 1.2303C28.9292 1.51945 28.6179 3.91684 28.6262 4.59107C28.6262 4.70143 28.6295 4.81112 28.6226 4.92115C28.4777 7.31015 31.6976 8.08368 31.6733 8.08368C33.8608 8.63983 37.4428 9.94973 37.4968 9.94973C43.1332 11.7457 43.5061 15.6391 43.4695 15.5928C43.8783 20.3393 40.0713 22.2178 40.0332 22.2178Z" fill="black" />
                                                <path d="M91.3433 21.1933C90.6599 20.0085 86.5013 12.7982 86.1269 12.1149C86.1233 12.1082 86.1213 12.1009 86.1209 12.0934C86.1206 12.0859 86.1219 12.0785 86.1248 12.0715C86.1277 12.0645 86.1321 12.0581 86.1377 12.0528C86.1434 12.0474 86.1502 12.0432 86.1577 12.0405C92.6364 9.50453 92.8538 6.23532 92.7752 5.55572C92.7611 5.43295 92.7462 5.30951 92.7408 5.18674C92.5375 0.752892 85.7653 0.418457 85.7653 0.418457H74.6033C75.153 1.26008 75.298 2.82591 75.298 2.82591C75.298 2.82591 75.3226 20.8169 75.298 20.839C75.1737 23.3263 74.6033 23.5863 74.6033 23.5863H79.703L79.3134 22.101C79.2739 21.9513 79.2525 21.7981 79.2496 21.6441C79.2359 20.9397 79.1949 18.8314 79.1829 18.2055C79.1801 18.0878 79.1952 17.9704 79.2279 17.8566C80.0183 15.1674 81.839 14.1799 82.4554 13.9156C82.5109 13.8922 82.574 13.8894 82.6316 13.9076C82.6893 13.9259 82.7373 13.9639 82.7656 14.0138L87.341 22.0164C87.3925 22.1069 87.4308 22.2034 87.4548 22.3032L87.761 23.5873H93.1369L91.5546 21.5113C91.4772 21.4094 91.4067 21.3032 91.3433 21.1933ZM82.3119 12.1619C82.3119 12.1619 80.5764 13.2145 79.1565 15.1037C79.1815 15.1268 79.1565 1.55862 79.1565 1.55862C79.1565 1.55862 85.8761 1.09303 88.2655 3.50182C88.4144 3.50182 90.2565 6.60364 86.5738 9.32104C86.7227 9.32104 82.3119 12.1619 82.3119 12.1619Z" fill="black" />
                                                <path d="M100.376 21.1646C100.434 21.655 100.65 23.3232 100.919 23.6029C100.956 23.5855 95.8607 23.6029 95.8607 23.6029C95.8607 23.6029 96.1474 23.1333 96.3681 21.6285C96.3907 21.4753 96.402 21.3209 96.4021 21.1663V2.88716C96.403 2.35321 96.3307 1.82132 96.1869 1.30422C96.0959 0.979179 95.9825 0.633339 95.8607 0.400879H100.919C100.919 0.400879 100.34 1.88654 100.36 2.83684V20.9016C100.36 20.9895 100.365 21.0773 100.376 21.1646Z" fill="#FF914D" />
                                                <path d="M111.368 20.2049L110.135 22.1777C110.126 22.1922 110.121 22.2086 110.121 22.2254C110.121 22.2422 110.126 22.2586 110.135 22.2732C110.144 22.2877 110.157 22.2998 110.173 22.3082C110.189 22.3165 110.206 22.3209 110.225 22.3209H122.303C122.33 22.3209 122.356 22.3209 122.383 22.3175C122.709 22.289 124.757 22.0328 125.649 20.0634C125.674 20.0174 125.947 20.0634 125.947 20.0634V23.5416H103.25C103.25 23.5416 105.239 21.9315 106.508 20.3431C106.51 20.3409 106.512 20.3387 106.515 20.3368C106.73 20.1278 115.961 8.44978 118.862 4.77839C119.436 4.05151 119.951 3.28591 120.403 2.488L120.773 1.83389C120.778 1.82524 120.78 1.81555 120.78 1.80576C120.78 1.79598 120.777 1.78643 120.771 1.77806C120.766 1.76968 120.758 1.76276 120.749 1.75796C120.74 1.75317 120.729 1.75067 120.719 1.7507H109.122C109.104 1.7507 106.506 1.52864 105.253 3.93911C105.253 3.91597 104.991 3.96193 104.991 3.96193L105.141 0.460938H127.737C127.737 0.460938 126.418 1.1989 123.88 4.49259L111.465 20.0654C111.43 20.1102 111.397 20.1568 111.368 20.2049Z" fill="black" />
                                                <path d="M152.072 20.9402L143.918 0.444824H139.885C139.885 0.444824 132.494 19.472 132.494 19.4492C131.498 21.8674 130.329 23.5483 130.329 23.5483C130.329 23.5483 134.784 23.5711 134.784 23.5483C133.817 22.2987 133.643 21.0593 133.633 20.37C133.629 20.0588 133.678 19.7489 133.778 19.4519C135.355 14.7805 140.206 14.9472 140.383 14.9124C140.387 14.9113 140.391 14.9105 140.394 14.91C144.982 14.9325 146.532 17.4909 146.791 18.0987C146.848 18.2329 146.905 18.3671 146.972 18.4949C148.219 20.9144 148.498 23.5483 148.498 23.5483H153.544L152.209 21.2196C152.157 21.1294 152.111 21.0361 152.072 20.9402ZM135.718 14.7403C136.487 12.8122 140.229 3.13405 140.559 2.27968C140.561 2.27518 140.564 2.27129 140.568 2.26853C140.573 2.26578 140.578 2.2643 140.583 2.2643C140.588 2.2643 140.593 2.26578 140.597 2.26853C140.601 2.27129 140.605 2.27518 140.606 2.27968L145.58 14.8755C145.585 14.8894 145.586 14.9046 145.582 14.919C145.577 14.9334 145.569 14.9462 145.556 14.9558C145.544 14.9653 145.529 14.9712 145.513 14.9724C145.497 14.9737 145.481 14.9704 145.467 14.963C144.539 14.4598 140.38 12.4838 135.909 14.8882C135.886 14.9009 135.859 14.9067 135.831 14.9046C135.804 14.9025 135.778 14.8926 135.758 14.8764C135.737 14.8603 135.722 14.8385 135.715 14.8141C135.708 14.7897 135.709 14.7639 135.718 14.7403Z" fill="black" />
                                                <path d="M3.6483 1.63532V22.4078C3.6483 23.2903 2.83181 24.0058 1.82397 24.0058C0.816129 24.0058 0 23.2903 0 22.4078V1.63532C0 0.752774 0.816492 0.0376156 1.82397 0.0376156C2.30299 0.035596 2.76461 0.203673 3.11376 0.507232C3.28135 0.651519 3.41524 0.826049 3.50717 1.02006C3.59911 1.21408 3.64714 1.42346 3.6483 1.63532Z" fill="#008479" />
                                                <path d="M10.9449 8.02887V22.4099C10.9449 23.2924 10.1284 24.0079 9.12096 24.0079C8.11348 24.0079 7.29663 23.2924 7.29663 22.4099V8.02887C7.29663 7.14633 8.11312 6.43117 9.12096 6.43117C9.59986 6.4292 10.0613 6.59728 10.4104 6.90079C10.578 7.04509 10.7118 7.21962 10.8038 7.41363C10.8957 7.60764 10.9437 7.81702 10.9449 8.02887Z" fill="#FF914C" />
                                                <path d="M18.2416 14.4185V22.408C18.2416 23.2906 17.4251 24.0061 16.4176 24.0061C15.4101 24.0061 14.5933 23.2906 14.5933 22.408V14.4185C14.5933 13.536 15.4101 12.8208 16.4176 12.8208C16.8962 12.8184 17.3577 12.9859 17.707 13.2888C17.8748 13.4333 18.0088 13.6081 18.1007 13.8024C18.1926 13.9967 18.2406 14.2064 18.2416 14.4185Z" fill="#008479" />
                                            </svg>
                                            {/* <div className='text text-sm mt-2 ps-2'>Human Resources Management System</div> */}
                                        </Link>
                                        {/* <!-- Navbar nav --> */}
                                        <ul class="navbar-nav flex-column" id="sideNavbar">
                                            <li class="nav-item">
                                                <a class="nav-link has-arrow" href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                                    Dashboard
                                                </a>
                                            </li>
                                            {/* <!-- Nav item --> */}
                                            <li class="nav-item">
                                                <a className={`nav-link has-arrow collapsed`} onClick={handleToggleEmployeesMenu} data-bs-toggle="collapse" data-bs-target="#navEmployees" aria-expanded={!isEmployeesCollapsed} aria-controls="navEmployees">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                                                    Employees
                                                </a>
                                                <div
                                                    id="navEmployees"
                                                    className={`collapse ${isEmployeesCollapsed ? 'collapse' : 'show'}`}
                                                    data-bs-parent="#sideNavbar"
                                                >
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/allemployes"
                                                                className={`nav-link ${activeLink === '/allemployes' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/allemployes')}
                                                            >
                                                                All Employees
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/addemployes"
                                                                className={`nav-link ${activeLink === '/addemployes' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/addemployes')}
                                                            >
                                                                Add Employees
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/alldepartments"
                                                                className={`nav-link ${activeLink === '/alldepartments' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/alldepartments')}
                                                            >
                                                                All Departments
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/adddepartments"
                                                                className={`nav-link ${activeLink === '/adddepartments' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/adddepartments')}
                                                            >
                                                                Add Departments
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/allcontracts"
                                                                className={`nav-link ${activeLink === '/allcontracts' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/allcontracts')}
                                                            >
                                                                Employees Contracts
                                                            </Link>

                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/addcontract"
                                                                className={`nav-link ${activeLink === '/addcontract' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/addcontract')}
                                                            >
                                                                Add Employees Contracts
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleAttendancesMenu}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navAttendances"
                                                    aria-expanded={!isAttendancesCollapsed}
                                                    aria-controls="navAttendances"
                                                >
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg> */}
                                                    {/* <Icon icon="material-symbols:add-moderator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1.2em" height="1.2em" /> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M17 22q-2.075 0-3.537-1.463T12 17q0-2.075 1.463-3.537T17 12q2.075 0 3.538 1.463T22 17q0 2.075-1.463 3.538T17 22m-5 0q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v5.675q-.65-.325-1.463-.5T17 10q-2.9 0-4.95 2.05T10 17q0 1.55.588 2.8t1.487 2.175q-.025 0-.037.013T12 22m4.5-2h1v-2.5H20v-1h-2.5V14h-1v2.5H14v1h2.5z" /></svg>
                                                    Attendances
                                                </a>
                                                <div
                                                    id="navAttendances"
                                                    className={`collapse ${isAttendancesCollapsed ? 'collapse' : 'show'}`}
                                                    data-bs-parent="#sideNavbar"
                                                >   <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/todayattendances"
                                                                className={`nav-link ${activeLink === '/todayattendances' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/todayattendances')}
                                                            >
                                                                Today Attendances
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/employeesattendances"
                                                                className={`nav-link ${activeLink === '/employeesattendances' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/employeesattendances')}
                                                            >
                                                                Employees Attendances
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleLeaveManagement}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navLeaveManagement"
                                                    aria-expanded={!isLeaveManagementCollapsed}
                                                    aria-controls="navLeaveManagement"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" /><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z" /></svg>
                                                    {/* <Icon icon="bx:calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1.2em" height="1.2em" /> */}
                                                    Leave Management
                                                </a>
                                                <div id="navLeaveManagement" className={`collapse ${isLeaveManagementCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/allleaverequest"
                                                                className={`nav-link ${activeLink === '/allleaverequest' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/allleaverequest')}
                                                            >
                                                                All Leave Request
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="#"
                                                                className={`nav-link ${activeLink === '#' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('#')}
                                                            >
                                                                Employees Leave Balance
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/leaveallocation"
                                                                className={`nav-link ${activeLink === '/leaveallocation' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/leaveallocation')}
                                                            >
                                                                Leave Allocation
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleAppraisals}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navAppraisals"
                                                    aria-expanded={!isAppraisalsCollapsed}
                                                    aria-controls="navAppraisals"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1rem" height="1rem"><path d="m10.95 16.55l5.65-5.65l-1.425-1.425L10.95 13.7l-2.125-2.125L7.4 13zM12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22M5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z" /></svg>
                                                    Appraisals
                                                </a>
                                                <div id="navAppraisals" className={`collapse ${isAppraisalsCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/allAppraisal"
                                                                className={`nav-link ${activeLink === '/allAppraisal' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/allAppraisal')}
                                                            >
                                                                All Appraisal
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleTogglePayrollManagement}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navPayrollManagement"
                                                    aria-expanded={!isPayrollManagementCollapsed}
                                                    aria-controls="navPayrollManagement"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1rem" height="1rem"><path d="M7 20V4h10v16zm-4-2V6h2v12zm16 0V6h2v12z" /></svg>
                                                    Payroll Management
                                                </a>
                                                <div id="navPayrollManagement" className={`collapse ${isPayrollManagementCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/employeesPayroll"
                                                                className={`nav-link ${activeLink === '/employeesPayroll' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/employeesPayroll')}
                                                            >
                                                                Employees Payroll
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/deduction"
                                                                className={`nav-link ${activeLink === '/deduction' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/deduction')}
                                                            >
                                                                Deduction
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/payslips"
                                                                className={`nav-link ${activeLink === '/payslips' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/payslips')}
                                                            >
                                                                Payslips
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleMyDocuments}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navMyDocuments"
                                                    aria-expanded={!isMyDocumentsCollapsed}
                                                    aria-controls="navMyDocuments"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1rem" height="1rem"><path d="M9 18h6q.425 0 .713-.288T16 17q0-.425-.288-.712T15 16H9q-.425 0-.712.288T8 17q0 .425.288.713T9 18m0-4h6q.425 0 .713-.288T16 13q0-.425-.288-.712T15 12H9q-.425 0-.712.288T8 13q0 .425.288.713T9 14m-3 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z" /></svg>
                                                    My Documents
                                                </a>
                                                <div id="navMyDocuments" className={`collapse ${isMyDocumentsCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/organisationFiles"
                                                                className={`nav-link ${activeLink === '/organisationFiles' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/organisationFiles')}
                                                            >
                                                                Organisation Files
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/employeeFiles"
                                                                className={`nav-link ${activeLink === '/employeeFiles' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/employeeFiles')}
                                                            >
                                                                Employee Files
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/shared"
                                                                className={`nav-link ${activeLink === '/shared' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/shared')}
                                                            >
                                                                Shared
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleReimbursement}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navReimbursement"
                                                    aria-expanded={!isReimbursementCollapsed}
                                                    aria-controls="navReimbursement"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1rem" height="1rem"><path d="M4 20V4h16v3h-9v10h9v3zm8-4V8h9v8zm4-2.5q.65 0 1.075-.425T17.5 12q0-.65-.425-1.075T16 10.5q-.65 0-1.075.425T14.5 12q0 .65.425 1.075T16 13.5" /></svg>
                                                    Reimbursement
                                                </a>
                                                <div id="navReimbursement" className={`collapse ${isReimbursementCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/requestReimbursement"
                                                                className={`nav-link ${activeLink === '/requestReimbursement' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/requestReimbursement')}
                                                            >
                                                                Request Reimbursement
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/all_Reimbursement"
                                                                className={`nav-link ${activeLink === '/all_Reimbursement' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/all_Reimbursement')}
                                                            >
                                                                All Reimbursement
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    className={`nav-link has-arrow collapsed`}
                                                    onClick={handleToggleAnnouncement}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navAnnouncement"
                                                    aria-expanded={!isAnnouncementCollapsed}
                                                    aria-controls="navReimnavAnnouncementbursement"
                                                >
                                                    {/* <a class="nav-link has-arrow  collapsed" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs" width="1rem" height="1rem"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10" /></svg>
                                                    Announcement
                                                </a>
                                                <div id="navAnnouncement" className={`collapse ${isAnnouncementCollapsed ? 'collapse' : 'show'}`} data-bs-parent="#sideNavbar">
                                                    <ul class="nav flex-column">
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/announcement"
                                                                className={`nav-link ${activeLink === '/announcement' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/announcement')}
                                                            >
                                                                Announcement
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link
                                                                to="/all_Announcement"
                                                                className={`nav-link ${activeLink === '/all_Announcement' ? 'active' : ''}`}
                                                                onClick={() => handleNavLinkClick('/all_Announcement')}
                                                            >
                                                                All Announcement
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="card bg-light shadow-none text-center mx-4 my-8">
                                            <div class="card-body py-6">
                                                <svg width="150" height="20" viewBox="0 0 154 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M71.8183 15.0443C71.8183 15.0443 68.2349 26.4881 55.5012 23.4548C53.3772 22.9489 51.4238 21.9335 49.9057 20.4693C48.1974 18.821 46.4723 16.2126 46.2353 12.3051C46.2176 11.9907 46.2327 11.6755 46.2802 11.3638C46.5122 9.78121 47.3627 2.21637 56.9678 0.280881C56.9678 0.280881 62.8848 -1.12528 68.4085 2.83727C68.4335 2.81412 69.5475 3.57524 70.1238 3.73591C70.1238 3.75872 70.8848 3.75872 70.8848 3.75872V9.07444L70.4499 9.03385C70.4499 9.03385 67.5145 0.694812 58.9524 1.52436C58.9524 1.4784 50.4914 2.98889 50.2909 11.6546C50.2909 11.6546 49.8561 21.3901 59.9714 22.5253C61.0077 22.6452 62.0593 22.5789 63.0685 22.33C65.393 21.748 69.4783 20.0373 71.4951 15.0443C71.5201 15.0902 71.8183 15.0443 71.8183 15.0443Z" fill="black" />
                                                    <path d="M40.0332 22.2178C32.4554 26.9502 24.1872 20.8009 24.1872 20.8009L23.5526 20.7318L24.1872 13.4578C24.1872 13.4578 24.6536 13.4417 24.6815 13.4578C23.9795 17.5867 26.3949 19.6993 26.2913 19.6993C29.945 23.7581 35.0614 22.5277 35.0614 22.5046C41.4872 20.9159 39.1113 15.6408 39.037 15.6408C37.3699 13.1072 30.6767 11.582 30.6767 11.582C24.729 10.103 24.7275 6.44974 24.7025 6.40446C24.1792 -0.115823 32.9896 0.0465309 32.9399 0.0237209C37.2956 -0.278175 41.0034 2.40132 41.0034 2.40132H41.5252L41.5383 6.72649C41.5383 6.72649 41.227 6.70334 41.202 6.72649C40.8301 0.947525 33.963 1.25277 33.963 1.2303C28.9292 1.51945 28.6179 3.91684 28.6262 4.59107C28.6262 4.70143 28.6295 4.81112 28.6226 4.92115C28.4777 7.31015 31.6976 8.08368 31.6733 8.08368C33.8608 8.63983 37.4428 9.94973 37.4968 9.94973C43.1332 11.7457 43.5061 15.6391 43.4695 15.5928C43.8783 20.3393 40.0713 22.2178 40.0332 22.2178Z" fill="black" />
                                                    <path d="M91.3433 21.1933C90.6599 20.0085 86.5013 12.7982 86.1269 12.1149C86.1233 12.1082 86.1213 12.1009 86.1209 12.0934C86.1206 12.0859 86.1219 12.0785 86.1248 12.0715C86.1277 12.0645 86.1321 12.0581 86.1377 12.0528C86.1434 12.0474 86.1502 12.0432 86.1577 12.0405C92.6364 9.50453 92.8538 6.23532 92.7752 5.55572C92.7611 5.43295 92.7462 5.30951 92.7408 5.18674C92.5375 0.752892 85.7653 0.418457 85.7653 0.418457H74.6033C75.153 1.26008 75.298 2.82591 75.298 2.82591C75.298 2.82591 75.3226 20.8169 75.298 20.839C75.1737 23.3263 74.6033 23.5863 74.6033 23.5863H79.703L79.3134 22.101C79.2739 21.9513 79.2525 21.7981 79.2496 21.6441C79.2359 20.9397 79.1949 18.8314 79.1829 18.2055C79.1801 18.0878 79.1952 17.9704 79.2279 17.8566C80.0183 15.1674 81.839 14.1799 82.4554 13.9156C82.5109 13.8922 82.574 13.8894 82.6316 13.9076C82.6893 13.9259 82.7373 13.9639 82.7656 14.0138L87.341 22.0164C87.3925 22.1069 87.4308 22.2034 87.4548 22.3032L87.761 23.5873H93.1369L91.5546 21.5113C91.4772 21.4094 91.4067 21.3032 91.3433 21.1933ZM82.3119 12.1619C82.3119 12.1619 80.5764 13.2145 79.1565 15.1037C79.1815 15.1268 79.1565 1.55862 79.1565 1.55862C79.1565 1.55862 85.8761 1.09303 88.2655 3.50182C88.4144 3.50182 90.2565 6.60364 86.5738 9.32104C86.7227 9.32104 82.3119 12.1619 82.3119 12.1619Z" fill="black" />
                                                    <path d="M100.376 21.1646C100.434 21.655 100.65 23.3232 100.919 23.6029C100.956 23.5855 95.8607 23.6029 95.8607 23.6029C95.8607 23.6029 96.1474 23.1333 96.3681 21.6285C96.3907 21.4753 96.402 21.3209 96.4021 21.1663V2.88716C96.403 2.35321 96.3307 1.82132 96.1869 1.30422C96.0959 0.979179 95.9825 0.633339 95.8607 0.400879H100.919C100.919 0.400879 100.34 1.88654 100.36 2.83684V20.9016C100.36 20.9895 100.365 21.0773 100.376 21.1646Z" fill="#FF914D" />
                                                    <path d="M111.368 20.2049L110.135 22.1777C110.126 22.1922 110.121 22.2086 110.121 22.2254C110.121 22.2422 110.126 22.2586 110.135 22.2732C110.144 22.2877 110.157 22.2998 110.173 22.3082C110.189 22.3165 110.206 22.3209 110.225 22.3209H122.303C122.33 22.3209 122.356 22.3209 122.383 22.3175C122.709 22.289 124.757 22.0328 125.649 20.0634C125.674 20.0174 125.947 20.0634 125.947 20.0634V23.5416H103.25C103.25 23.5416 105.239 21.9315 106.508 20.3431C106.51 20.3409 106.512 20.3387 106.515 20.3368C106.73 20.1278 115.961 8.44978 118.862 4.77839C119.436 4.05151 119.951 3.28591 120.403 2.488L120.773 1.83389C120.778 1.82524 120.78 1.81555 120.78 1.80576C120.78 1.79598 120.777 1.78643 120.771 1.77806C120.766 1.76968 120.758 1.76276 120.749 1.75796C120.74 1.75317 120.729 1.75067 120.719 1.7507H109.122C109.104 1.7507 106.506 1.52864 105.253 3.93911C105.253 3.91597 104.991 3.96193 104.991 3.96193L105.141 0.460938H127.737C127.737 0.460938 126.418 1.1989 123.88 4.49259L111.465 20.0654C111.43 20.1102 111.397 20.1568 111.368 20.2049Z" fill="black" />
                                                    <path d="M152.072 20.9402L143.918 0.444824H139.885C139.885 0.444824 132.494 19.472 132.494 19.4492C131.498 21.8674 130.329 23.5483 130.329 23.5483C130.329 23.5483 134.784 23.5711 134.784 23.5483C133.817 22.2987 133.643 21.0593 133.633 20.37C133.629 20.0588 133.678 19.7489 133.778 19.4519C135.355 14.7805 140.206 14.9472 140.383 14.9124C140.387 14.9113 140.391 14.9105 140.394 14.91C144.982 14.9325 146.532 17.4909 146.791 18.0987C146.848 18.2329 146.905 18.3671 146.972 18.4949C148.219 20.9144 148.498 23.5483 148.498 23.5483H153.544L152.209 21.2196C152.157 21.1294 152.111 21.0361 152.072 20.9402ZM135.718 14.7403C136.487 12.8122 140.229 3.13405 140.559 2.27968C140.561 2.27518 140.564 2.27129 140.568 2.26853C140.573 2.26578 140.578 2.2643 140.583 2.2643C140.588 2.2643 140.593 2.26578 140.597 2.26853C140.601 2.27129 140.605 2.27518 140.606 2.27968L145.58 14.8755C145.585 14.8894 145.586 14.9046 145.582 14.919C145.577 14.9334 145.569 14.9462 145.556 14.9558C145.544 14.9653 145.529 14.9712 145.513 14.9724C145.497 14.9737 145.481 14.9704 145.467 14.963C144.539 14.4598 140.38 12.4838 135.909 14.8882C135.886 14.9009 135.859 14.9067 135.831 14.9046C135.804 14.9025 135.778 14.8926 135.758 14.8764C135.737 14.8603 135.722 14.8385 135.715 14.8141C135.708 14.7897 135.709 14.7639 135.718 14.7403Z" fill="black" />
                                                    <path d="M3.6483 1.63532V22.4078C3.6483 23.2903 2.83181 24.0058 1.82397 24.0058C0.816129 24.0058 0 23.2903 0 22.4078V1.63532C0 0.752774 0.816492 0.0376156 1.82397 0.0376156C2.30299 0.035596 2.76461 0.203673 3.11376 0.507232C3.28135 0.651519 3.41524 0.826049 3.50717 1.02006C3.59911 1.21408 3.64714 1.42346 3.6483 1.63532Z" fill="#008479" />
                                                    <path d="M10.9449 8.02887V22.4099C10.9449 23.2924 10.1284 24.0079 9.12096 24.0079C8.11348 24.0079 7.29663 23.2924 7.29663 22.4099V8.02887C7.29663 7.14633 8.11312 6.43117 9.12096 6.43117C9.59986 6.4292 10.0613 6.59728 10.4104 6.90079C10.578 7.04509 10.7118 7.21962 10.8038 7.41363C10.8957 7.60764 10.9437 7.81702 10.9449 8.02887Z" fill="#FF914C" />
                                                    <path d="M18.2416 14.4185V22.408C18.2416 23.2906 17.4251 24.0061 16.4176 24.0061C15.4101 24.0061 14.5933 23.2906 14.5933 22.408V14.4185C14.5933 13.536 15.4101 12.8208 16.4176 12.8208C16.8962 12.8184 17.3577 12.9859 17.707 13.2888C17.8748 13.4333 18.0088 13.6081 18.1007 13.8024C18.1926 13.9967 18.2406 14.2064 18.2416 14.4185Z" fill="#008479" />
                                                </svg>
                                                <div class="mt-4">
                                                    <p class="fs-6 mb-4">
                                                        Scriza HRMS to get insights into its features, functionality, and user experiences.
                                                    </p>
                                                    <a href="#" class="btn btn-secondary btn-sm">Explore Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style={{ width: "auto", height: "1431px" }}>
                        </div>
                    </div>
                        <div class="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                            <div class="simplebar-scrollbar" style={{ width: "0px", display: "none", transform: "translate3d(0px, 0px, 0px)" }}>
                            </div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                            <div class="simplebar-scrollbar" style={{ height: "101px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Sidebar
