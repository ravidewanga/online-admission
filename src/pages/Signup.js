import React, { Component } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '', first_name_err: '',
            middle_name: '', middle_name_err: '',
            last_name: '', last_name_err: '',
            dob: '', dob_err: '',
            gender: '', gender_err: '',
            father_name: '', father_name_err: '',
            mother_name: '', mother_name_err: '',
            phone_no: '', phone_no_err: '', phone_no_touched: false,
            email: '', email_err: '', email_touched: false,
            password: '', password_err: '',
            confirm_password: '', confirm_password_err: '',
            btnVisible: true
        }
    }

    valid() {
        const {first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password } = this.state;
        let checkValid = true;
        if (first_name == '') {
            this.setState({
                first_name_err: 'This field is required.'
            })
            checkValid = false
        }

        if (last_name == '') {
            this.setState({
                last_name_err: 'This field is required.'
            })
            checkValid = false
        }
        if (dob == '') {
            this.setState({
                dob_err: 'This field is required.'
            })
            checkValid = false
        }

        if (gender == '') {
            this.setState({
                gender_err: 'This field is required.'
            })
            checkValid = false
        }
        if (father_name == '') {
            this.setState({
                father_name_err: 'This field is required.'
            })
            checkValid = false
        }

        if (mother_name == '') {
            this.setState({
                mother_name_err: 'This field is required.'
            })
            checkValid = false
        }

        if (phone_no == '') {
            this.setState({
                phone_no_err: 'This field is required.'
            })
        } else if (phone_no.length != 10) {
            this.setState({
                phone_no_err: 'Please enter valid phone no.'
            })
            checkValid = false
        }

        if (email == '') {
            this.setState({
                email_err: 'This field is required.'
            })
        } else if (!email.includes('@')) {
            this.setState({
                email_err: 'Please enter valid email id.'
            })
            checkValid = false
        }

        if (password == '') {
            this.setState({
                password_err: 'This field is required.'
            })
        }

        if (confirm_password == '') {
            this.setState({
                confirm_password_err: 'This field is required.'
            })
            checkValid = false
        }
        else if (password != confirm_password) {
            this.setState({
                confirm_password_err: 'Password mismatch.'
            })
            checkValid = false
        }
        return checkValid;
    }


    submit() {
        if (this.valid() == true) {
            const { first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password } = this.state;
            const data = {
                first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password
            }
            console.log(data);
        }
    }

    render() {
        const { phone_no, email } = this.state;

        return (
            <>
                <Container className="shadow signup">
                    <Row>
                        <Col xm={12} sm={12}>
                            <h1 className="signup-heading">Sign Up</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="text"
                                    placeholder="First Name"
                                    aria-label="First Name"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ first_name: e.target.value })}
                                />
                                {this.state.first_name_err != '' ? <div className="error">{this.state.first_name_err}</div> : null}
                            </div>

                        </Col>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="text"
                                    placeholder="Middle Name"
                                    aria-label="Middle Name"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ middle_name: e.target.value })}
                                />
                                {this.state.middle_name_err != '' ? <div className="error">{this.state.middle_name_err}</div> : null}
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="text"
                                    placeholder="Last Name"
                                    aria-label="Last Name"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ last_name: e.target.value })}
                                />
                                {this.state.last_name_err != '' ? <div className="error">{this.state.last_name_err}</div> : null}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="date"
                                    placeholder="Date of Birth"
                                    aria-label="Date of Birth"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ dob: e.target.value })}
                                />
                                {this.state.dob_err != '' ? <div className="error">{this.state.dob_err}</div> : null}
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl as="select" onChange={e => this.setState({ gender: e.target.value })}>
                                    <option value="">Select Gender</option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="TRANSGENDER">TRANSGENDER</option>
                                </FormControl>
                                {this.state.gender_err != '' ? <div className="error">{this.state.gender_err}</div> : null}
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
                                    aria-label="Father's Name"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ father_name: e.target.value })}
                                />
                                {this.state.father_name_err != '' ? <div className="error">{this.state.father_name_err}</div> : null}
                            </div>
                        </Col>

                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="text"
                                    placeholder="Mother's Name"
                                    aria-label="Mother's Name"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ mother_name: e.target.value })}
                                />
                                {this.state.mother_name_err != '' ? <div className="error">{this.state.mother_name_err}</div> : null}
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
                                    aria-label="Phone No."
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ phone_no: e.target.value, phone_no_touched: true })}
                                />
                                {this.state.phone_no_touched == true && phone_no.length != 10 ? <div className="error">Please enter valid phone no.</div>
                                    : this.state.phone_no_err != '' ? <div className="error">{this.state.phone_no_err}</div>
                                        : null}
                            </div>
                        </Col>

                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="email"
                                    placeholder="Email Id"
                                    aria-label="Email Id"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ email: e.target.value, email_touched: true })}
                                />
                                {this.state.email_touched == true && !email.includes('@') ? <div className="error">Please enter valid email id.</div>
                                    : this.state.email_err != '' ? <div className="error">{this.state.email_err}</div>
                                        : null}
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
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ password: e.target.value })}
                                />
                                {this.state.password_err != '' ? <div className="error">{this.state.password_err}</div> : null}
                            </div>
                        </Col>

                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl
                                    type="text"
                                    placeholder="Confirm Password"
                                    aria-label="Confirm Password"
                                    aria-describedby="basic-addon1"
                                    onChange={e => this.setState({ confirm_password: e.target.value })}
                                />
                                {this.state.confirm_password_err != '' ? <div className="error">{this.state.confirm_password_err}</div> : null}
                            </div>
                        </Col>
                        <Col sm={12} md={4}></Col>
                    </Row>
                    <br />

                    <Row>
                        <Col md={6}>
                            <Button onClick={() => this.submit()} variant="primary" block>Submit</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default Signup;