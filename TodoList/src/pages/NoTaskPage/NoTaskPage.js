import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const NoTaskPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="blank-space">
            <p>NO TASKS</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NoTaskPage
