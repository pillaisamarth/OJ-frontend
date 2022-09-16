import { axiosInstance } from "./axiosApi";
import { Alert } from "react-bootstrap";
import { useState } from "react";


const Error = ({errorMessage}) => {
    return (
        <div className="error-message">{errorMessage}</div>
    );
}

async function handleLogout(){
    try {
        const response = await axiosInstance.post('/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

const UnautherizedError = ({show, setShow}) => {

    return (
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Error! Unauthorized</Alert.Heading>
          <p>
            You need to login
          </p>
        </Alert>
    );

}
  

export {Error, handleLogout, UnautherizedError};