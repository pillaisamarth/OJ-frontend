import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../css/style.css'

function LoginFormComponent() {
  return (
    <Form className='form-box'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 4, offset:4}}>
          <Form.Control type="text" placeholder="Username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Col sm={{span : 4, offset:4}}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 4, offset: 5 }}>
          <Button type="submit" variant="dark" className='sign-button'>Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

function RegisterFormComponent(){
  return (
    <Form className='form-box'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 4, offset:4}}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={{span : 4, offset:4}}>
          <Form.Control type="text" placeholder="Username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Col sm={{span : 4, offset:4}}>
          <Form.Control type="password" placeholder="Password" />
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