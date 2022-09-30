import { myAxios } from "./helpler";

// to be asked to rushi 
export const loadAllCategories=()=>{
    return myAxios.get(`/api/categories/getAllCategories`).then(response=>{return response.data.data})
}  

// for drivers
export const loadAllDriverCategories=()=>{
    return myAxios.get(`/api/d_categories/getAllDriverCategories`).then((response=>{return response.data.data}))
}