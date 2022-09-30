import {myAxios} from "./helpler";

export const signUp=(user)=>{
    return myAxios
    .post("/api/v1/auth/register",user)
    .then((response)=>response.data);
};

export const loginUser=(loginDetail)=>{
    return myAxios
    .post("/api/v1/auth/login",loginDetail)
     .then((response)=>response.data);
    //.then((response)=> {return response.json()});
};