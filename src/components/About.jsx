import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutImg from "../assets/about-bg.jpg"

const About = () => {
    return (
        <section id="about" className="about py-5 bg-dark">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">QUIENES SOMOS</h2>
                    <p className="golden fw-bolder">Acerca de nuestra marca</p>
                </div>

                <Row>
                    <Col lg={6}>
                        <Image fluid src={aboutImg} alt="Acerca de nuestra marca" />
                    </Col>
                    <Col lg={6} className="pt-4 pt-lg-0 light-gray">
                        <h3 className="golden fw-bold display-4 lh-1">Un mundo de sabores irresistibles</h3>
                        <p>En Humaya, creemos en la magia de los sabores y en el poder de un postre para alegrar el día de cualquiera. Cada dulce que sale de nuestras manos es una obra de arte comestible, creada con amor y dedicación. Nos esforzamos por brindarte una experiencia gastronómica única, donde cada bocado sea una explosión de placer para tus sentidos.</p>
                        <p>Nos enorgullece ser parte de tus momentos más dulces: desde celebraciones especiales hasta esos pequeños antojos diarios que mereces consentirte. Nuestro objetivo es llevar alegría a través de nuestros dulces y convertir cada momento en una dulce experiencia que siempre recordarás.</p>
                        <p>Te invitamos a explorar nuestra amplia variedad de dulces y postres en nuestra tienda en línea, y a unirte a nosotros en este viaje lleno de sabores y delicias. <strong>¡Bienvenido a Humaya, el lugar donde los sueños dulces se hacen realidad!"</strong></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
