import React, { Component } from "react";
import { Col, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
const axios = require('axios');


const required = val => val && val.length;
const usernameValidate = (val)=>{
    if(val == ''){
        return "This filed is required."
    }else if(val.length <= 3){
        return "Username should be 3 characters."
    }
}
const unameMinLength = val => val && val.length >= 3;
const passMinLength = val => val && val.length >= 8;
const passMaxLength = val => val && val.length <= 16;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }

    handleOnSubmit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <>
                <Col md={12}>
                    <LocalForm onSubmit={this.handleOnSubmit}>
                        <Image src={require('../assets/images/student.png')} roundedCircle />
                        <div className="mb-2">
                            <Control.text
                                className="form-control"
                                model=".username"
                                name="username"
                                placeholder="Username"
                                id="username"
                                validators={{
                                    required,
                                    unameMinLength
                                  }}
                            />
                            <Errors
                                className="text-danger"
                                model=".username"
                                show="touched"
                                messages={{
                                    required: "Username is required",
                                    unameMinLength: "Username should be 3 characters."
                                }}
                            />
                        </div>

                        <div className="mb-2">
                            <Control.text
                                className="form-control"
                                model=".password"
                                placeholder="Password"
                                name="password"
                                id="password"
                                validators={{
                                    required,passMinLength,passMaxLength
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: "Password is required",
                                    passMinLength:"Password should be 8 correctors.",
                                    passMaxLength:"Password should be less then 16 characters.",
                                }}
                            />
                        </div>

                        <div className="float-right">
                            <p><a href={'/forgot-password'}>Forgot password?</a></p>
                        </div>

                        <Button variant="primary" type="submit" block>Login</Button>
                        <br /><br />
                        <div className="text-center">
                            <p>Need an account? <Link to={'/sign-up'}>Sign up</Link></p>
                        </div>
                    </LocalForm>
                </Col>
            </>
        );
    }
}
export default Login;