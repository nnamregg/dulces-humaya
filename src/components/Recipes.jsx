import { Container, Row, Col, Image } from 'react-bootstrap';
import recipe1Img from "../assets/recipes/recipes-01.jpg";
import recipe2Img from "../assets/recipes/recipes-02.png";
import recipe3Img from "../assets/recipes/recipes-03.jpg";

const Recipes = () => {
    return (
        <section id="recipes" className="recipes py-5">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">RECETAS</h2>
                    <p className="golden fw-bolder">Las recetas más ricas</p>
                </div>
               <Row>
                    <Col lg={4} md={6}>
                        <div className="recipe-card text-center overflow-hidden mb-5">
                            <Image fluid src={recipe1Img} alt="Alfajores de Dulce de Leche" />
                            <div className="recipe-info text-light position-absolute">
                                <div className="recipe-info-content">
                                    <h4 className="fs-5">Alfajores de Dulce de Leche</h4>
                                    <span>something something</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="recipe-card text-center overflow-hidden mb-5">
                            <Image fluid src={recipe2Img} alt="Crepes de Choconutt" />
                            <div className="recipe-info text-light position-absolute">
                                <div className="recipe-info-content">
                                    <h4 className="fs-5">Crepes de Choconutt</h4>
                                    <span>something something</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="recipe-card text-center overflow-hidden mb-5">
                            <Image fluid src={recipe3Img} alt="Brownies veganos" />
                            <div className="recipe-info text-light position-absolute">
                                <div className="recipe-info-content">
                                    <h4 className="fs-5">Brownies veganos</h4>
                                    <span>something something</span>
                                </div>
                            </div>
                        </div>
                    </Col>
               </Row>
            </Container>            
        </section>
    )
}

export default Recipes;
