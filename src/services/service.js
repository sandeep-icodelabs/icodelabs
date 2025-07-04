import axios from "axios";

const http = axios.create({
  baseURL:"https://api.icodestaging.in"
});

http.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";

    // Return the modified config to continue with the request
    return config;
  },
  function (error) {
    // Return any error encountered in the request configuration
    return Promise.reject(error);
  }
);

// POST request for submitting form data
export const createContactMessage = async (formData) => {
  return http.post("/api/contact-uses", formData);
};

// API Endpoints Here

export const serviceDetails = async () => {
  return http.get(`/api/service-details`);
};
export const companyLogoDetails = async () => {
  return http.get(`/api/company-logos?populate=*`);
};

export const ourApproachDetails = async () => {
  return http.get(`/api/ourapproaches?populate=*`);
};

export const howsWork = async () => {
  return http.get(`/api/processes`);
};

export const expProcesses = async () => {
  return http.get(`/api/experiences-processes?populate=*`);
};

export const expertise = async () => {
  return http.get(`/api/expertises?populate=*`);
};

export const industry = async () => {
  return http.get(`/api/industries?populate=*`);
};

export const blog = async () => {
  return await http.get(`/api/articles?populate=*`);
};

export const blogDetail = async () => {
  return await http.get(`/api/articles?populate=*`);
};

export const singleBlogDeatail = async (id) => {
  return await http.get(`/api/articles/${id}?populate=*`);
};

export const sendEmail = async () => {
  return await http.post(`/api/email`);
};
// /api/industries
