import { Container, Row, Col, Button } from "react-bootstrap";
import { MdLocationPin, MdSchedule, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact" className="contact py-5 bg-black">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">CONTACTO</h2>
                    <p className="golden fw-bolder">Comunicate con nosotros</p>
                </div>
            </Container>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.418668555847!2d-91.24363303473288!3d14.64999952347411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eca9f2c33ff1b%3A0x675fcc14183f5786!2sIsla%20de%20Los%20Gatos!5e0!3m2!1ses-419!2sar!4v1686940210883!5m2!1ses-419!2sar" width="100%" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container>
                <Row className="mt-5">
                    <Col lg={4}>
                        <div className="contact-info w-100">
                            <div className="address">
                                <div className="ico-bg">
                                    <MdLocationPin />
                                </div>
                                <h4>Dirección:</h4>
                                <p>something something 1234</p>
                            </div>

                            <div className="schedule">
                                <div className="ico-bg">
                                    <MdSchedule />
                                </div>
                                <h4>Horarios:</h4>
                                <p>Lunes - Sábado<br/>09:00 - 22:00</p>
                            </div>

                            <div className="email">
                                <div className="ico-bg">
                                    <MdEmail />
                                </div>
                                <h4>Email:</h4>
                                <p>info@humaya.com.ar</p>
                            </div>

                            <div className="phone">
                                <div className="ico-bg">
                                    <MdPhone />
                                </div>
                                <h4>Teléfono:</h4>
                                <p>+54 (11) 4444-4444</p>
                            </div>  
                        </div>
                    </Col>

                    <Col lg={8} className="mt-5 mt-lg-0">
                        <form action="" className="w-100">
                            <Row>
                                <Col md={6} className="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" required></input>
                                </Col>
                                <Col md={6} className="form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required></input>
                                </Col>
                            </Row>
                            <div className="form-group mt-3">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required></input>
                            </div>
                            <div className="form-group mt-3">
                                <textarea class="form-control" name="message" rows="8" placeholder="Mensaje" required></textarea>
                            </div>
                            <div class="text-center my-3">
                                <Button type="submit" className="fw-semibold">Enviar</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
