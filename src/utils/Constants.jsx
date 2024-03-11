import axios from "axios";

export const API_URL = "https://hrms.scriza.in";

// const bearerToken = JSON.parse(localStorage.getItem("HRMS token"));
// var bearerToken = `Bearer ${JSON.parse(localStorage.getItem('HRMS token'))}`
var bearerToken = `Bearer 30|vD2mT6OIa1Iu7kGYkeFTMLHiICEvpRpRNZnJ8OXZe3263e80`
// console.log(bearerToken, "Token")


export const Loginuse = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = "";

  var response = await axios.post(`${API_URL}/api/login`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const Logiout = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/logout`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

//                                                            Employes API



export const employAdd = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/employee`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const employGet = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.get(`${API_URL}/api/employees`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const departmentGet = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.get(`${API_URL}/api/departments`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const departmentAdd = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/department`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const attendenceGet = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/today-attendance`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const attendenceALL = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/attendances?company_id=4&month=${requestData}`);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const leasveALL = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/new-leave-requests`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const GetRembursement = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/reimbursements`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const GetAllContract = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/contracts`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const GetAllRembursement = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/reimbursements`);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const getLeasveALLoc = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/leave-types`);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const getDecutions = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/deductions`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getAnnouncement = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/announcements`);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const announcementAdd = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/announcements`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getOrganisation_Document = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/organization-documents/organization/4`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getEmployee_Document = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/organization-documents/employee/4`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const getShare_Document = async () => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  var response = await axios.get(`${API_URL}/api/organization-documents/employee/4`);
  if (response) {
    return response;
  } else {
    return [];
  }
}


export const AddOrgDoc = async (requestData) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;

  var response = await axios.post(`${API_URL}/api/organization-documents`, requestData);
  if (response) {
    return response;
  } else {
    return [];
  }
}

