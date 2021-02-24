import React, { Component } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',first_name_touched:false,
            middle_name: '',middle_name_touched:false,
            last_name: '',last_name_touched:false,
            dob: '',dob_touched:false,
            gender: '',gender_touched:false,
            father_name: '',father_name_touched:false,
            mother_name: '',mother_name_touched:false,
            phone_no: '',phone_no_touched:false,
            email: '',email_touched:false,
            password: '',password_touched:false,
            confirm_password: '',confirm_password_touched:false,
            btnVisible: true
        }
    }

     valid = () =>{
         let formValidate = true;
        const { first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password } = this.state;
        if(first_name == ''){
            this.setState({first_name_touched:true})
            formValidate = false;
        }
        if(last_name == ''){
            this.setState({last_name_touched:true})
            formValidate = false;
        }
        if(dob == ''){
            this.setState({dob_touched:true})
            formValidate = false;
        }
        if(gender == ''){
            this.setState({gender_touched:true})
            formValidate = false;
        }
        if(father_name == ''){
            this.setState({father_name_touched:true})
            formValidate = false;
        }
        if(mother_name == ''){
            this.setState({mother_name_touched:true})
            formValidate = false;
        }
        if(phone_no == ''){
            this.setState({phone_no_touched:true})
            formValidate = false;
        }
        if(email == ''){
            this.setState({email_touched:true})
            formValidate = false;
        }
        if(password == ''){
            this.setState({password_touched:true})
            formValidate = false;
        }
        if(confirm_password == '' || confirm_password != password){
            this.setState({confirm_password_touched:true})
            formValidate = false;
        }
        return formValidate;
    }

    evenHandler = (event) =>{
        const field_name = event.target.name;
        const field_val = event.target.value;
        
        console.log(field_name);

        let val_upperCase = field_val.toUpperCase();
        if(field_name == 'password' ||  field_name == 'confirm_password' || field_name == 'email'){
            val_upperCase = field_val;    
        }
        this.setState({
            [field_name]:val_upperCase,
            [field_name+'_touched']:true
        })
    }


    submit = () =>{
        const checkValid = this.valid();
        if(checkValid){
            console.log(this.state);
        }
    }

    render() {
        const { first_name, middle_name, last_name, dob, gender, father_name, mother_name, phone_no, email, password, confirm_password } = this.state;
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
                                    name="first_name"
                                    id="first_name"
                                    value={first_name}
                                    //onChange={e => this.setState({ first_name: e.target.value,first_name_touched:true })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.first_name_touched== true && first_name == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ middle_name: e.target.value })}
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
                                    // onChange={e => this.setState({ last_name: e.target.value })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.last_name_touched== true && last_name == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ dob: e.target.value })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.dob_touched== true && dob == '' ? <div className="error">This field is required.</div> : null}
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="mb-2">
                                <FormControl as="select"
                                    name="gender"
                                    id="gender"
                                    value={gender}
                                    // onChange={e => this.setState({ gender: e.target.value })}
                                    onChange={this.evenHandler}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="TRANSGENDER">TRANSGENDER</option>
                                </FormControl>
                                {this.state.gender_touched== true && gender == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ father_name: e.target.value })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.father_name_touched== true && father_name == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ mother_name: e.target.value })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.mother_name_touched== true && mother_name == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ phone_no: e.target.value, phone_no_touched: true })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.phone_no_touched== true && phone_no == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ email: e.target.value, email_touched: true })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.email_touched== true && email == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ password: e.target.value })}
                                    onChange={this.evenHandler}
                                />
                                {this.state.password_touched== true && password == '' ? <div className="error">This field is required.</div> : null}
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
                                    // onChange={e => this.setState({ confirm_password: e.target.value,confirm_password_touched:true })}
                                    onChange={this.evenHandler}
                                />
                                {
                                    this.state.confirm_password_touched == true && confirm_password == '' ? <div className="error">This field is required.</div> 
                                    : this.state.confirm_password_touched == true && password != confirm_password ? <div className="error">Password mismatch.</div> 
                                    : null
                                }
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