// *******AXIOS METHOD*********
// ACTION --> OBJECTS THAT DESCRIBE EVENTS AND CHANGES

import axios from "axios"

import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS } from "./ActionTypes";
    
// ---------------------REGISTER METHOD- ------------------
export const register=(userData) => async(dispatch) => {
    // actual logic to get data from server
// send action to store using dispatch

    dispatch({type:REGISTER_REQUEST})

    const baseUrl = "http://localhost:5454"
    
    try {
        const response = await axios.post(`${baseUrl}/auth/signup`, userData); // here userData is body
        const user = response.data; // fetching data from response ibject
        console.log(user);
        
        dispatch({type:REGISTER_SUCCESS,payload:user.jwt})  // this jwt will acess reducer and store it in reducer state
        localStorage.setItem("jwt", user.jwt)
    } catch (error) {
        dispatch({type:REGISTER_FAILURE,payload:error.message})
        console.log(error);
    }
};
// ------------------------LOGIN METHOD-----------------
export const login=(userData) => async(dispatch) => {
    // actual logic to get data from server
// send action to store using dispatch

    dispatch({type:LOGIN_REQUEST})

    const baseUrl = "http://localhost:5454"
    
    try {
        const response = await axios.post(`${baseUrl}/auth/signin`, userData.data); // here userData is body
        const user = response.data; // fetching data from response ibject
        console.log(user);
        
        dispatch({type:LOGIN_SUCCESS,payload:user.jwt})  // this jwt will acess reducer and store it in reducer state
        localStorage.setItem("jwt", user.jwt)
        userData.navigate("/")
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error.message})
        console.log(error);
    }
};
// -------------------GET USER METHOD---------------

export const getUser=(jwt) => async(dispatch) => {   // jwt for authentication
    // actual logic to get data from server
// send action to store using dispatch

    dispatch({type:GET_USER_REQUEST})

    const baseUrl = "http://localhost:5454"
    
    try {
        const response = await axios.get(`${baseUrl}/api/users/profile`,{  // no need of Requestbody coz it is a get method
            headers:{
                Authorization:`Bearer ${jwt}` // provided header for jwt
            },
        }); 
        const user = response.data; // fetching data from response ibject
        console.log(user);
        
        dispatch({type:GET_USER_SUCCESS,payload:user})  // this jwt will acess reducer and store it in reducer state
    
    } catch (error) {
        dispatch({type:GET_USER_FAILURE,payload:error.message})
        console.log(error);
    }
};

export const logout =() =>(dispatch) => {
    localStorage.clear();
    dispatch({type: LOGOUT});
}