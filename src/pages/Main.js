import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Login from "./Login";
import Instruction from "./Instruction";

class Main extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Row>
                    <Col md={8} className="instruction shadow">
                        <Instruction/>
                    </Col>
                    <Col  offset-md={4} className="login shadow">
                       <Login />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;