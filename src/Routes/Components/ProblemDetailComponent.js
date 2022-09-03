import React, { useState } from 'react';
import axios from 'axios';
import Urls from '../../Config/Urls';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Formik, useFormik , Field} from 'formik';
import * as Yup from 'yup';
import ProblemlistComponent from './ProblemlistComponent';

const SubmitForm = ({problem}) => {
    const formik = useFormik({
        initialValues:{
            submittedFile: '',
            language: 'cpp',
        },
        validationSchema: Yup.object({
            submittedFile: Yup.mixed().required('Required'),
            language: Yup.string().required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div className='submit-form'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId='submittedFile'>
                    <Col sm='6'>
                        <Form.Control 
                        type='file'
                        id='submittedFile'
                        name='submittedFile'
                        onChange={formik.handleChange}
                        value={formik.values.submittedFile}
                        />
                        {formik.errors.submittedFile && formik.touched.submittedFile ? (
                            <div>{formik.errors.submittedFile}</div>
                        ): null}
                    </Col>
                    <Col sm='3'>
                        <Form.Select
                        name='language'
                        onChange={formik.handleChange}
                        value={formik.values.language}>
                            {
                                problem.languages.map((language)=>(
                                    <option value={language[0]}>{language[1]}</option>
                                ))
                            }
                        </Form.Select>
                        {formik.errors.language && formik.touched.language ? (
                            <div>{formik.errors.language}</div>
                        ) : null}
                    </Col>
                    <Col>
                        <Button type="submit" variant="outline-dark">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
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