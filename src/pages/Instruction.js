import React, { Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';

class Instruction extends Component {
    render() {
        return (
            <>
                <Col md={12}>
                    <h3>QUICK TIPS</h3>
                    <h5>IMPORTANT INSTRUCTIONS FOR CANDIDATES BEFORE APPLYING ONLINE</h5>
                    <b>Keep the following items in your hand before applying :</b>
                    <ul className="instruction-rules">
                        <li>Email id</li>
                        <li>Mobile no</li>
                        <li>Scanned photograph (Less than 100KB)</li>
                        <li>Scanned signature (Less than 100KB)</li>
                        <li>Credit card, Net banking or ATM-cum-Debit card if available</li>
                    </ul>
                    <p><b>Note:</b> Before apply online admission, candidates are advised to <b>Download & Read</b> admission instructions & rules.</p>
                    <div>
                        <Button variant="danger">Admission Instruction & Rules</Button>{' '}
                        <Button variant="danger">Fee Structure</Button>
                    </div>
                </Col>
            </>
        );
    }
}

export default Instruction;