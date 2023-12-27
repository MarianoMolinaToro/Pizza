import { Container, Row, Col,} from "react-bootstrap"

const NotFound = () => {
  return (
    <>
      <Container className="padding-custom">
        <Row className="mb-3">
          <Col className="text-center">
            <h1>Not Found</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound