


import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import AddEmployes from "../Pages/AddEmployes";
import AllEmployes from "../Pages/AllEmployes";
import DashboardMain from '../Pages/DashboardMain';
import AddContract from '../Pages/AddContract'
import AllContract from '../Pages/AllContracts'
import AddDepartments from "../Pages/AddDepartments";
import AllDepartments from "../Pages/AllDepartments";
import Attendence from "../Pages/Attendence";
import AllAttendence from "../Pages/AllAttendence"
import AllLeaveRequest from "../Pages/AllLeaveRequest";
import LeaveAllocation from "../Pages/LeaveAllocation";
import AllAppraisal from "../Pages/AllAppraisal";
import AddAppraisal from "../Pages/AddAppraisal";
import EmployeesPayroll from "../Pages/EmployeesPayroll";
import Deduction from "../Pages/Deduction";
import Payslips from "../Pages/Payslips";
import OrganisationFiles from "../Pages/OrganisationFiles";
import SharedFiles from "../Pages/SharedFiles";
import EmployeesDoc from "../Pages/EmployeesDoc";
import Reimbursement from "../Pages/Reimbursement";
import AllReimbursement from "../Pages/AllReimbursement";
import AllAnnouncement from "../Pages/AllAnnouncement";
import Announcement from "../Pages/Announcement";

const Container = styled.div`
  /* background-color: #F2F3F6; */
`;
const PageRouter = () => {
  
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="allemployes" element={<AllEmployes />} />
          <Route path="addemployes" element={<AddEmployes />} />
          <Route path="addcontract" element={<AddContract />} />
          <Route path="allcontracts" element={<AllContract />} />
          <Route path="adddepartments" element={<AddDepartments />} />
          <Route path="alldepartments" element={<AllDepartments />} />
          <Route path="todayattendances" element={<Attendence />} />
          <Route path="employeesattendances" element={<AllAttendence />} />
          <Route path="allleaverequest" element={<AllLeaveRequest />} />
          <Route path="leaveallocation" element={<LeaveAllocation />} />
          <Route path="allAppraisal" element={<AllAppraisal />} />
          <Route path="addAppraisal" element={<AddAppraisal />} />
          <Route path="employeesPayroll" element={<EmployeesPayroll />} />
          <Route path="deduction" element={<Deduction />} />
          <Route path="payslips" element={<Payslips />} />
          <Route path="organisationFiles" element={<OrganisationFiles />} />
          <Route path="employeeFiles" element={<EmployeesDoc />} />
          <Route path="shared" element={<SharedFiles />} />
          <Route path="requestReimbursement" element={<Reimbursement />} />
          <Route path="all_Reimbursement" element={<AllReimbursement />} />
          <Route path="all_Announcement" element={<AllAnnouncement />} />
          <Route path="announcement" element={<Announcement />} />
        </Routes>
      </Container>
    </>
  );
};

export default PageRouter;
