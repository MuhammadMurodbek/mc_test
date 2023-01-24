import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageSide from './image-side'
import ValidationSchema from "./login"

const AuthPage = () => {
  return (
    <div>
        <Row>
            <Col lg={6}>
                <ValidationSchema/>
            </Col>
            <Col lg={6}>
                <ImageSide/>
            </Col>
        </Row>
    </div>
  )
}

export default AuthPage