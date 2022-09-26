import { axiosInstance } from "./axiosApi";
import { Alert } from "react-bootstrap";
import { useState } from "react";




const Error = ({errorMessage}) => {
    return (
        <div className="error-message">{errorMessage}</div>
    );
}

const LogOut = () => {
    return (
        <div>Logged Out!</div>
    )
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

const GeneralError = ({show, setShow, title, body}) => {

    return (
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{title}</Alert.Heading>
          <p>
            {body}
          </p>
        </Alert>
    );

}

async function checkLogin (setFirstElement, setSecondElement ) {
    try{
        const response = await axiosInstance.get('/user/get/', {
            "refresh_token" : localStorage.getItem("refresh_token")
        });
        console.log(response.data.username);
        setFirstElement(response.data.username);
        setSecondElement('Logout');
        console.log(response.data.username);
        console.log(response);
    }catch(e){
        // if(e.response.status == 401 && e.response.statusText === 'Unauthorized'){
        //     setFirstElement('Login');
        //     setSecondElement('Register');
        // }
        console.log(e);
    }
}



  

export {Error, handleLogout, GeneralError, checkLogin, LogOut};