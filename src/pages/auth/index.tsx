import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ValidationSchema from "./login"

const AuthPage = () => {
  return (
    <div>
        <Row>
            <Col lg={6}>
                <ValidationSchema/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis saepe tenetur quasi, deserunt reprehenderit. Adipisci cumque amet blanditiis culpa. Assumenda atque officiis suscipit rerum ad voluptate quos, laudantium accusamus?
            </Col>
            <Col lg={6}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse voluptate, quia vel consequuntur sequi vitae excepturi dolorem accusantium quae incidunt temporibus aliquid? Maiores officia cumque nostrum deserunt voluptatum. Molestiae!
            </Col>
        </Row>
    </div>
  )
}

export default AuthPage