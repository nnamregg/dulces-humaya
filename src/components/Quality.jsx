import { Container, Row, Col }from 'react-bootstrap';
import { RiPlantFill } from "react-icons/ri";
import { LuWheatOff } from "react-icons/lu";
import { GiChemicalDrop } from "react-icons/gi";

const Quality = () => {

    return (
        <section id="quality" className="quality bg-dark py-5">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">CALIDAD</h2>
                    <p className="golden fw-bolder">La mejor calidad para vos</p>
                </div>
                
                <Row>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <div className="quality-box text-center h-100">
                            <RiPlantFill />
                            <h4 className="golden mt-3">100% ORGÁNICO</h4>
                            <h5 className="golden fs-6 mt-3">Nos preocupamos por tu bienestar y el cuidado del medio ambiente.</h5>
                            <p className="light-gray mt-3">Es por eso que todos nuestros productos son elaborados con ingredientes 100% orgánicos. Trabajamos en estrecha colaboración con agricultores y proveedores que comparten nuestros valores, seleccionando cuidadosamente los ingredientes más frescos y naturales para ofrecerte una experiencia de sabor incomparable. Puedes disfrutar de nuestros dulces y postres con la tranquilidad de saber que están libres de pesticidas y productos químicos dañinos.</p>
                        </div>
                    </Col>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <div className="quality-box text-center h-100">
                            <LuWheatOff />
                            <h4 className="golden mt-3">SIN TACC</h4>
                            <h5 className="golden fs-6 mt-3">Sabemos lo importante que es para muchas personas tener opciones sin gluten en su dieta.</h5>
                            <p className="light-gray mt-3">Por eso, nuestros productos están certificados como libres de TACC (trigo, avena, cebada y centeno). Utilizamos harinas y ingredientes alternativos cuidadosamente seleccionados para asegurarnos de que cada bocado sea seguro y delicioso, incluso para aquellos con sensibilidad al gluten o enfermedad celíaca. Queremos que todos puedan disfrutar de nuestros dulces y postres sin preocupaciones.</p>
                        </div>
                    </Col>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <div className="quality-box text-center h-100">
                            <GiChemicalDrop />
                            <h4 className="golden mt-3">SIN CONSERVANTES</h4>
                            <h5 className="golden fs-6 mt-3">Nos esforzamos por ofrecerte productos frescos y saludables.</h5>
                            <p className="light-gray mt-3">Nuestros dulces y postres están libres de conservantes artificiales. Creemos en resaltar los sabores naturales de los ingredientes que utilizamos, sin añadir productos químicos innecesarios. Cada producto que sale de nuestras manos es elaborado con cuidado y se somete a rigurosos controles de calidad para garantizar su frescura y sabor excepcionales. Queremos que experimentes el verdadero placer de los dulces y postres sin comprometer tu bienestar.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Quality;
