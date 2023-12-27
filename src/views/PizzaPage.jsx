import { Container, Row, Col } from "react-bootstrap"
import PizzaCard from "../components/PizzaDetail"

const PizzaPage = () => {
    return (
        <>
            <Container className="padding-custom">
                <Row className="mb-3 p-3">
                    <Col className="text-center">
                        <h1>Detalles de la Pizza</h1>
                        
                    </Col>
                </Row>
                <PizzaCard />
            </Container>
        </>
    )
}

export default PizzaPage