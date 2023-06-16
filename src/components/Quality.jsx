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
                        <div className="quality-box text-center">
                            <RiPlantFill />
                            <h4 className="golden mt-3 fw-semibold">100% ORGÁNICO</h4>
                            <p className="light-gray mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos nisi omnis harum voluptas dignissimos molestias, ratione voluptatibus neque in sint eligendi labore saepe quaerat, minus blanditiis esse ea accusamus.</p>
                        </div>
                    </Col>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <div className="quality-box text-center">
                            <LuWheatOff />
                            <h4 className="golden mt-3 fw-semibold">SIN TACC</h4>
                            <p className="light-gray mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos nisi omnis harum voluptas dignissimos molestias, ratione voluptatibus neque in sint eligendi labore saepe quaerat, minus blanditiis esse ea accusamus.</p>
                        </div>
                    </Col>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <div className="quality-box text-center">
                            <GiChemicalDrop />
                            <h4 className="golden mt-3 fw-semibold">SIN CONSERVANTES</h4>
                            <p className="light-gray mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos nisi omnis harum voluptas dignissimos molestias, ratione voluptatibus neque in sint eligendi labore saepe quaerat, minus blanditiis esse ea accusamus.</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default Quality;
