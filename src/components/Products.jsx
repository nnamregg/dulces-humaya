import { Container, Row, Col, Nav, Image, Button } from 'react-bootstrap';
import prod1Img from '../assets/products/product-01.png';
import prod2Img from '../assets/products/product-02.png';
import prod3Img from '../assets/products/product-03.png';
import prod4Img from '../assets/products/product-04.png';

const Products = () => {

    return (
        <section id="products" className="products bg-black py-5">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">Productos</h2>
                    <p className="golden fw-bolder">Nuestros dulces y sabores</p>
                </div>

                <Row>
                    <Col lg={3}>
                        <Nav variant="tabs" className="flex-column h-100" defaultActiveKey="#tab-1">
                            <Nav.Item className="flex-grow-1">
                                <Nav.Link data-bs-toggle="tab" href="#tab-1">Dulce de leche tradicional</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="flex-grow-1">
                                <Nav.Link data-bs-toggle="tab" href="#tab-2">Dulce de leche sin azúcar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="flex-grow-1">
                                <Nav.Link data-bs-toggle="tab" href="#tab-3">Dulce Choconutt</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="flex-grow-1">
                                <Nav.Link data-bs-toggle="tab" href="#tab-4">Alfajores de Maizena</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col lg={9} className="mt-4 mt-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <Row>
                                    <Col lg={9} className="details order-2 order-lg-1">
                                        <h3 className="golden">DULCE DE LECHE TRADICIONAL</h3>
                                        <p className="light-gray my-3">Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.</p>
                                        <p className="golden mb-4 fw-semibold">Presentación en frasco de vidrio de 580gr.</p>
                                        <Button variant="golden" size="sm" className="px-4">+ INFO</Button>
                                    </Col>
                                    <Col lg={3} className="order-1 order-lg-2">
                                        <Image fluid roundedCircle src={prod1Img} alt="Dulce de leche tradicional" className="d-block mx-auto" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="tab-pane" id="tab-2">
                                <Row>
                                    <Col lg={9} className="details order-2 order-lg-1">
                                        <h3 className="golden">DULCE DE LECHE SIN AZÚCAR</h3>
                                        <p className="light-gray my-3">Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con stevia.</p>
                                        <p className="golden mb-4 fw-semibold">Presentación en frasco de vidrio de 580gr. y 280gr.</p>
                                        <Button variant="golden" size="sm" className="px-4">+ INFO</Button>
                                    </Col>
                                    <Col lg={3} className="order-1 order-lg-2">
                                        <Image fluid roundedCircle src={prod2Img} alt="Dulce de leche sin azúcar" className="d-block mx-auto" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="tab-pane" id="tab-3">
                                <Row>
                                    <Col lg={9} className="details order-2 order-lg-1">
                                        <h3 className="golden">DULCE CHOCONUTT</h3>
                                        <p className="light-gray my-3">Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.</p>
                                        <p className="golden mb-4 fw-semibold">Presentación en frasco de vidrio de 280gr.</p>
                                        <Button variant="golden" size="sm" className="px-4">+ INFO</Button>
                                    </Col>
                                    <Col lg={3} className="order-1 order-lg-2">
                                        <Image fluid roundedCircle src={prod3Img} alt="Dulce Choconutt" className="d-block mx-auto" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="tab-pane" id="tab-4">
                                <Row>
                                    <Col lg={9} className="details order-2 order-lg-1">
                                        <h3 className="golden">ALFAJORES DE MAIZENA</h3>
                                        <p className="light-gray my-3">Alfajores de dulce con coco rallado, rellecon con 2cm de pura dulzura. Pudiendo elegir entre dulce de leche tradicional, light o choconutt.</p>
                                        <p className="golden mb-4 fw-semibold">Presentación en caja de 6 y 12.</p>
                                        <Button variant="golden" size="sm" className="px-4">+ INFO</Button>
                                    </Col>
                                    <Col lg={3} className="order-1 order-lg-2">
                                        <Image fluid roundedCircle src={prod4Img} alt="Alfajores de Maizena" className="d-block mx-auto" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
               
            </Container>
            
        </section>    
    )
};

export default Products;
