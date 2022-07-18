import React, { useState } from 'react';
import axios from 'axios';
import Urls from '../../Config/Urls';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const SubmitForm = ({problem}) => {

    const [random, setRandom] = useState(null);
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // const formik = useFormik({
    //     initialValues: {
    //         uploadedFile : '',
    //         language : '',
    //     },
    //     validationSchema: Yup.object().shape({
    //         uploadedFile : Yup.mixed().required(),
    //         language : Yup.string().required(),
    //     }),
    //     onSubmit: values => {
    //         axios.post(`${Urls.submitbase}${problem.pk}`, values);
    //     }
    // });

    // const formik = useFormik({
    //     initialValues: {
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //     },
    //     validationSchema: Yup.object({
    //       firstName: Yup.string()
    //         .max(15, 'Must be 15 characters or less')
    //         .required('Required'),
    //       lastName: Yup.string()
    //         .max(20, 'Must be 20 characters or less')
    //         .required('Required'),
    //       email: Yup.string().email('Invalid email address').required('Required'),
    //     }),
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });


    return (
        <div className='submit-form'>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    {/* <Col sm="6">
                        <Form.Control 
                        type="file" 
                        required
                        onChange={formik.handleChange}
                        onBlur = {formik.handleBlur}
                        value={formik.values.uploadedFile}/>
                        
                            {formik.touched.uploadedFile && formik.errors.uploadedFile ? 
                            (
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {formik.errors.uploadedFile}
                                </Form.Control.Feedback>
                            ) : null}
                        
                    </Col> */}
                    <Col sm="3">
                        <Form.Select>
                            {
                                problem.languages.map((language)=>(
                                    <option>{language[1]}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button type="submit" variant="outline-dark">Submit</Button>
                    </Col>
                </Form.Group>

            </Form>
        </div>
                    
    );
}


function ProblemDetailComponent({problemId}) {
    const [problem, setProblem] = React.useState(null);
    

    React.useEffect(() => {
        let data;
        axios.get(`${Urls.problemdetailbase}${problemId}`).then((response) => {
            data = response.data;
            setProblem(data);
        });
    }, [])
    console.log(problem);
    if(problem != null)
    return (
            <div>
                <h3 className='problem-title'>{problem.title}</h3>
                <hr></hr>
                <p className='problem-statement'>
                    {problem.statement}
                </p>
                <SubmitForm problem={problem} />
            </div>

    );
}

export default ProblemDetailComponent;