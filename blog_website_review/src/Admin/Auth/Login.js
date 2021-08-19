import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"

const Login = () => {

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")


    const handlesubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <Container>
            <Row>
                <h1 className="text-dark font-weight-bold text-center py-5">
                    React Firebase Simple Blog {" "}
                    <span className="text-primary">[Admin]</span>{" "}
                    </h1>
                    <Col md={5} sm={12} xm={12} className="mx-auto p-3 my-5">
                        <Form onSubmit={handlesubmit}>
                            <Form.Group controlId={"fullEmailBasicForm"} className="my-2">
                                <Form.Control type="email" placeholder={"Email"} value={email} onChange={e=> setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId={"fullPasswordBasicForm"} className="my-2">
                                <Form.Control type="password" placeholder={"Password"} value={pass} onChange={e=> setPass(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId={"fullSubmitBasicForm"} className="my-5">
                                <Button type="submit" variant={"dark"} bg="dark" className="form-control">
                                    Login
                                </Button>
                            </Form.Group>
                           
                            
                            
                            
                        </Form>
                        </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Login
