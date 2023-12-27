import { Container, Row, Col } from "react-bootstrap"
import PizzaMenu from "../components/Menu"

const HomePage = () => {
    return (
        <> <Container className="padding-custom">
            <Row className="mb-3">
                <Col className="text-left text-white img-bg rounded m-3">
                <div className="banner">
        <div className="texto-banner">
          <h1>Pizzería Mamma Mía!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div></Col>
            </Row>
            <PizzaMenu />
        </Container>
        </>
    )
}

export default HomePage