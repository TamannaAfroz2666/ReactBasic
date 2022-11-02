// import React from "react";

// const From = () =>{
//     return(
//         <div className="">

//         </div>
//     );
// }
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FromValidation.css';
function ContainerFluidExample() {
  return (
    <div className='container fluid mt-5' >
        <Form className='fluid'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <h1 className='header1 mt-5  p-3 mb-2 bg-danger text-white'> hello</h1>
  </Form>
    </div>
  );
}

export default ContainerFluidExample;