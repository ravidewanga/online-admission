import React, { Component } from "react";
import { Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
const axios = require('axios');

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }

    eventHandler = (event) => {
        const field_name = event.target.name;
        const field_value = event.target.value;
        this.setState({
            [field_name]: field_value,
        })
    }

    handleOnInputBlur = (event) => {
        const field_name = event.target.name;
        const state = this.state;
        const errors = this.validate(state);
        this.setState({
            errors: { ...errors, [field_name]: errors[field_name] }
        })
    }

    validate = () => {
        const errors = {};
        if (this.state.username.length < 3 || this.state.username.length > 16) {
            errors.username = "Username should be 4 to 15 character.";
        }

        if (this.state.password.length < 8) {
            errors.password = "Password should be 8 character.";
        }
        return errors;
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state);
        if (errors && Object.keys(errors).length !== 0) {
            this.setState({ errors });
            return;
        }
        this.setState({ errors: {} });
        //Make api call
        console.log("Make API Call");
        axios.post('/user', {
            username: this.state.username,
            password: this.state.password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { username, password, errors } = this.state;
        return (
            <>
                <Col md={12}>
                    <form onSubmit={this.handleOnSubmit}>
                        <Image src={require('../assets/images/student.png')} roundedCircle />
                        <div className="mb-2">
                            <FormControl
                                placeholder="Username"
                                name="username"
                                id="username"
                                value={username}
                                onBlur={this.handleOnInputBlur}
                                onChange={this.eventHandler}
                            />
                            <div className="error">{errors.username}</div>
                        </div>

                        <div className="mb-2">
                            <FormControl
                                placeholder="Password"
                                name="password"
                                id="password"
                                value={password}
                                onBlur={this.handleOnInputBlur}
                                onChange={this.eventHandler}
                            />
                            <div className="error">{errors.password}</div>
                        </div>

                        <div className="float-right">
                            <p><a href={'/forgot-password'}>Forgot password?</a></p>
                        </div>

                        <Button variant="primary" type="submit" block>Login</Button>
                        <br /><br />
                        <div className="text-center">
                            <p>Need an account? <Link to={'/sign-up'}>Sign up</Link></p>
                        </div>
                    </form>
                </Col>
            </>
        );
    }
}
export default Login;