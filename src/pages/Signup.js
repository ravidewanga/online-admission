import React, { Component } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
const axios = require('axios');

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            dob: '',
            gender: '',
            father_name: '',
            mother_name: '',
            phone_no: '',
            email: '',
            password: '',
            confirm_password: '',
            errors: {}
        }
    }

    evenHandler = (event) => {
        const fieldName = event.target.name;
        const fieldVal = event.target.value;
        this.setState({
            [fieldName]: fieldVal
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
        if (this.state.first_name == '') {
            errors.first_name = 'This field is required.';
        }
        if (this.state.last_name == '') {
            errors.last_name = 'This field is required.';
        }
        if (this.state.dob == '') {
            errors.dob = 'This field is required.';
        }
        if (this.state.gender == '') {
            errors.gender = 'This field is required.';
        }
        if (this.state.father_name == '') {
            errors.father_name = 'This field is required.';
        }
        if (this.state.mother_name == '') {
            errors.mother_name = 'This field is required.';
        }
        let phone = this.state.phone_no.trim();
        if (phone == '') {
            errors.phone_no = 'This field is required.';
        }else if(phone.length != 10){
            errors.phone_no = 'Please enter valid phone no.';
        }
        if (this.state.email == '') {
            errors.email = 'This field is required.';
        }else if(!this.state.email.includes('@')){
            errors.email = 'Please enter valid email address.';
        }
        if (this.state.password == '') {
            errors.password = 'This field is required.';
        }else if (this.state.password.length < 8) {
            errors.password = 'Password should be 8 characters minimum.';
        }

        if (this.state.confirm_password != this.state.password) {
            errors.confirm_password = 'Password mismatch.';
        }
        return errors;
    }

    handleOnSubmit = event =>{
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
        const {errors, first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password } = this.state;
        return (
            <>
                <Container className="shadow signup">
                    <Row>
                        <Col xm={12} sm={12}>
                            <h1 className="signup-heading">Sign Up</h1>
                        </Col>
                    </Row>
                    <form onSubmit={this.handleOnSubmit}>
                        <Row>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="First Name"
                                        name="first_name"
                                        id="first_name"
                                        value={first_name}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.first_name}</div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Middle Name"
                                        name="middle_name"
                                        id="middle_name"
                                        value={middle_name}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Last Name"
                                        name="last_name"
                                        id="last_name"
                                        value={last_name}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.last_name}</div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="dob"
                                        id="dob"
                                        value={dob}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.dob}</div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl as="select"
                                        name="gender"
                                        id="gender"
                                        value={gender}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                        <option value="TRANSGENDER">TRANSGENDER</option>
                                    </FormControl>
                                    <div className="error">{errors.gender}</div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}></Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Father's Name"
                                        name="father_name"
                                        id="father_name"
                                        value={father_name}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.father_name}</div>
                                </div>
                            </Col>

                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Mother's Name"
                                        name="mother_name"
                                        id="mother_name"
                                        value={mother_name}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.mother_name}</div>
                                </div>
                            </Col>

                            <Col sm={12} md={4}></Col>
                        </Row>


                        <Row>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="number"
                                        placeholder="Phone No."
                                        name="phone_no"
                                        id="phone_no"
                                        value={phone_no}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.phone_no}</div>
                                </div>
                            </Col>

                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="email"
                                        placeholder="Email Id"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.email}</div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}></Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.password}</div>
                                </div>
                            </Col>

                            <Col sm={12} md={4}>
                                <div className="mb-2">
                                    <FormControl
                                        type="text"
                                        placeholder="Confirm Password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        value={confirm_password}
                                        onBlur={this.handleOnInputBlur}
                                        onChange={this.evenHandler}
                                    />
                                    <div className="error">{errors.confirm_password}</div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}></Col>
                        </Row>
                        <br />

                        <Row>
                            <Col md={6}>
                                <Button type="submit" variant="primary" block>Submit</Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </>
        );
    }
}
export default Signup;