import { privateAxios } from "./helpler";
import { myAxios } from "./helpler";

// Create post function
export const createPost = (postData) => {
  //console.log(postData);
  return privateAxios
    .post(
      `/api/vehicles/user/${postData.userId}/category/${postData.categoryId}/addVehicle`,
      postData
    )
    .then((responce) => responce.data);
};

// get all post
export const loadAllPosts = () => {
  return myAxios
    .get(`/api/vehicles/getAllVehiclesWithPagination`)
    .then((response) => response.data);
};

// upload vehicle Image
export const uploadPostImage = (image, id) => {
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
    .post(`/api/vehicles/uploadVehicleImage/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//upload vehicle rc image
export const uploadPostImageRc = (image, id) => {
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
    .post(`/api/vehicles/uploadVehicleRCImage/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//upload vehicle puc image
export const uploadVehiclePUCImage = (image,id)=>{
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
  .post(`/api/vehicles/uploadVehiclePUCImage/${id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response)=>response.data);
}

// upload vehicle insurance image
export const uploadVehicleInsuranceImage = (image,id)=>{
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
  .post(`/api/vehicles/uploadVehicleInsuranceImage/${id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response)=>response.data);
}

// upload vehicle agreement image
export const uploadVehicleAgreementImage = (image,id)=>{
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
  .post(`/api/vehicles/uploadVehicleAgreementImage/${id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response)=>response.data);
}

//for drivers
export const createDriver = (postData) => {
  console.log(postData);
  return privateAxios
    .post(
      `/api/drivers/user/${postData.userId}/category/${postData.d_categoryId}/enrollAsDriver`,
      postData
    )
    .then((response) => response.data);
};

// upload driver image
export const uploadDriverImage = (image, d_id) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/api/drivers/uploadDriverImage/${d_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

// upload driver license image
export const uploadDriverLicenseImage = (image, d_id) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/api/drivers/uploadDrivingLicenseImage/${d_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

// Image Upload Fitness
export const uploadFitnessImage = (image,d_id)=>{
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
  .post(`/api/drivers/uploadDriverFitnessCertificateImage/${d_id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response)=>response.data);
}

// upload Driver agreement image

export const uploadDriverAgreementImage = (image,d_id)=>{
  let formData = new FormData();
  formData.append("image", image);
  console.log("formdata img" + formData);
  return privateAxios
  .post(`/api/drivers/uploadDriverAgreementImage/${d_id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response)=>response.data);
}
