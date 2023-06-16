import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {

    return (
        <section id="hero" className="hero vh-100 d-flex align-items-center">
            <Container className="text-light text-center">
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <h1 className="display-1 my-5 fw-bold">DULCES DEL ALMA</h1>
                        <p className="fs-5 fw-medium w-75 my-4 mx-auto">Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, acompañándote en los momentos más importantes de la vida.</p>
                        <Button variant="outline" size="lg" href="#contact" className="btn-hero mt-5 mb-3 text-light fw-bold">
                            CONOCENOS
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
