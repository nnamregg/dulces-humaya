import { Container, Row, Col, Image } from "react-bootstrap";
import footerLogo from "../assets/logo/logo-humaya_100x100.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaChevronRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="footer-info mb-5">
                                <Image src={footerLogo} width={100} alt="Logo Footer" className="mb-4"/>
                                <p className="text-light">
                                    <strong className="light-gray">Teléfono:</strong> (11)4444-4444<br/>
                                    <strong className="light-gray">Email:</strong> info@humaya.com.ar
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaYoutube />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={2} className="footer-links">
                            <h4 className="fw-bold golden">Menú</h4>
                            <ul className="light-gray m-0 p-0">
                                <li>
                                    <FaChevronRight className="me-2" />
                                    <a href="#hero">Home</a>    
                                </li>
                                <li><FaChevronRight className="me-2" />
                                    <a href="#quality">Calidad</a>
                                </li>
                                <li><FaChevronRight className="me-2" />
                                    <a href="#products">Productos</a>
                                </li>
                                <li><FaChevronRight className="me-2" />
                                    <a href="#about">Quiénes somos</a>
                                </li>
                            </ul>
                        </Col>

                        <Col md={6} lg={3} className="footer-links">
                            <h4 className="fw-bold golden">Navegación</h4>
                            <ul className="light-gray m-0 p-0">
                                <li>
                                    <FaChevronRight className="me-2" />
                                    <a href="#clients">Clientes</a>    
                                </li>
                                <li><FaChevronRight className="me-2" />
                                    <a href="#recipes">Recetas</a>
                                </li>
                                <li><FaChevronRight className="me-2" />
                                    <a href="#contact">Contacto</a>
                                </li>
                                {/* <li><FaChevronRight className="me-2" />
                                    <a href="#">Privacy policy</a>
                                </li> */}
                            </ul>
                        </Col>
                        
                        <Col md={6} lg={4} className="footer-newsletter">
                            <h4 className="fw-bold pb-3 golden">Newsletter</h4>
                            <p className="light-gray">Suscribite para recibir todas nuestras novedades!</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Suscribite" />
                            </form>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Container className="py-4">
                <div className="copyright text-center light-gray">
                    <strong>nmg &copy;</strong> Todos los derechos reservados.
                </div>
            </Container>
        </footer>
    )
};

export default Footer;
