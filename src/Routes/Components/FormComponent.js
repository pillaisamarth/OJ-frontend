import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import '../../css/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { checkLogin, Error, GeneralError } from '../../Config/Utils';
import { axiosInstance } from '../../Config/axiosApi';
import {useState} from 'react'

function LoginFormComponent() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const formik = useFormik({
    initialValues: {
      username : '',
      password : '',
    },
    validationSchema : Yup.object({
      username : Yup.string()
      .required('No username provided'),
      password : Yup.string()
      .required('No password provided'),
    }),
    onSubmit : values => {
      // alert(JSON.stringify(values, null, 2));
      axiosInstance.post('/token/obtain/', {
        username:values.username,
        password:values.password
      })
      .then(response => {
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        navigate("/");
        console.log(response);
        window.location.reload(true);
      })
      .catch(error => {
        if(error.response.status == 401 && error.response.statusText === 'Unauthorized'){
          setIsError(true);
        }
      })
    }
  })
  return (
    <Form className='form-box' onSubmit={formik.handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 6, offset: 3}}>
          <Form.Control 
          type="text"
          placeholder="Username" 
          name="username"
          onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username ? (
            <Error errorMessage ={formik.errors.username} />
          ) : null}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Col sm={{span : 6, offset:3}}>
          <Form.Control 
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}/>
          {formik.errors.password && formik.touched.password ? (
            <Error errorMessage={formik.errors.password} />
          ) : null}
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 4, offset: 5 }}>
          <Button type="submit" variant="dark" className='sign-button'>Sign in</Button>
        </Col>
      </Form.Group>
      <GeneralError show={isError} setShow={setIsError} title="Invalid Details" body="Try again!"/>
    </Form>
  );
}

function RegisterFormComponent(){
  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
      emailId: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .required('No username provided')
      .min(8, 'Username is too short - should be atleast 8 characters'),
      password: Yup.string()
      .required('No password provided')
      .min(10, 'Password is too short - should be atleast 10 characters'),
      emailId: Yup.string()
      .required('No email address provided')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address')
    }),
    onSubmit : values => {
      alert(JSON.stringify(values, null, 2));
    },
  })
  return (
    <Form className='form-box' onSubmit={formik.handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 6, offset:3}}>
          <Form.Control
          type="text" 
          placeholder="Email" 
          name="emailId"
          onChange={formik.handleChange}/>
          {formik.errors.emailId && formik.touched.emailId ? (
            <Error errorMessage={formik.errors.emailId}/>
          ) : null}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 6, offset:3}}>
          <Form.Control
          type="text" 
          placeholder="Username" 
          name="username"
          onChange={formik.handleChange}/>
          {formik.errors.username && formik.touched.username ? (
            <Error errorMessage={formik.errors.username}/>
          ) : null}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Col sm={{span : 6, offset:3}}>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          name="password"
          onChange={formik.handleChange}/>
          {formik.errors.password && formik.touched.password ? (
            <Error errorMessage={formik.errors.password}/>
          ): null}
        </Col>
      </Form.Group>

      
      
      <Form.Group as={Row} className="mb-4">
        <Col sm={{ span: 4, offset: 5 }}>
          <Button type="submit" variant="dark" className='sign-button'>Register</Button>
        </Col>
      </Form.Group>
    </Form>
  );

}

export  {LoginFormComponent, RegisterFormComponent};