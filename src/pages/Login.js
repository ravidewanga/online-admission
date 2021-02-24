import React, { Component } from "react";
import {Col, Button, InputGroup, FormControl,Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Signup from "./Signup";

class Login extends Component {
    render() {
        return (
            <>
                <Col md={12}>
                    <Image src={require('../assets/images/student.png')} roundedCircle />
                    <InputGroup className="mb-2">
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-2">
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <div className="float-right">
                        <p><a href={'/forgot-password'}>Forgot password?</a></p>
                    </div>

                    <Button variant="primary" block>Login</Button>

                    <br /><br />
                    <div className="text-center">
                        <p>Need an account? <Link to={'/sign-up'}>Sign up</Link></p>
                    </div>
                </Col>
            </>
        );
    }
}
export default Login;