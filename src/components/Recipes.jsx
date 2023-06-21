import { useState } from "react";
import { recipes } from "../helpers/recipes.js";
import { Container, Row, Col, Image, Modal, ListGroup, CloseButton } from "react-bootstrap";
import { IoPeople, IoTimer, IoExtensionPuzzle } from "react-icons/io5";

const Recipes = () => {
    const [showModal, setShowModal] = useState(false);
    const [maxRecipe, setMaxRecipe] = useState(null);

    const handleClick = (recipe) => {
        setMaxRecipe(recipe);
        setShowModal(true);
    }

    const handleHide = () => {
        setShowModal(false);
        setMaxRecipe(null);
    }

    return (
        <>
        <section id="recipes" className="recipes py-5">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">RECETAS</h2>
                    <p className="golden fw-bolder">Las recetas más ricas</p>
                </div>
               <Row>
                    { recipes.map((recipe) => {
                        return (
                            <Col lg={4} md={6} key={recipe.img.slice(0,-4)}>
                                <div className="recipe-card text-center overflow-hidden mb-5" onClick={() => handleClick(recipe)}>
                                    <Image fluid src={`/recipes/${recipe.img}`} alt={recipe.title} />
                                    <div className="recipe-info text-light position-absolute">
                                        <div className="recipe-info-content">
                                            <h4>{recipe.title}</h4>
                                            <div className="d-flex justify-content-around w-75 mx-auto">
                                                <div className="d-flex align-items-center">
                                                    <IoPeople className="me-2" />
                                                    <span>{recipe.servings}</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <IoTimer className="me-2" />
                                                    <span>{recipe.prepTime}' mins</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <IoExtensionPuzzle className="me-2" />
                                                    <span>{recipe.difficulty}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
               </Row>
            </Container>
        </section>
        <Modal
            show={showModal}
            onHide={handleHide}
            scrollable={true}
            dialogClassName="custom-modal"
            aria-labelledby="custom-modal-title"
        >
            <Modal.Header>
                <Modal.Title id="custom-modal-title">
                    {maxRecipe?.title}
                </Modal.Title>
                <CloseButton variant="white" onClick={() => setShowModal(false)} />
            </Modal.Header>

            <Modal.Body>
                <Image fluid src={`recipes/${maxRecipe?.imgWide}`} />
                <div className="modal-recipe-info d-flex justify-content-around my-4 mx-auto text-light">
                    <div className="d-flex flex-column align-items-center">
                        <IoPeople className="mb-2"/>
                        <span>{maxRecipe?.servings}</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <IoTimer className="mb-2"/>
                        <span>{maxRecipe?.prepTime}' mins</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <IoExtensionPuzzle className="mb-2"/>
                        <span>{maxRecipe?.difficulty}</span>
                    </div>
                </div>
                
                <h5 className="mt-4 mb-2 golden">Ingredientes</h5>
                <ListGroup variant="flush">
                    { maxRecipe?.ingredients.map((ingredient) => {
                        return <ListGroup.Item>{ingredient}</ListGroup.Item>
                    })}
                </ListGroup>

                <h5 className="mt-4 mb-2 golden">Instrucciones</h5>
                <ListGroup as="ol" variant="flush" numbered>
                    { maxRecipe?.instructions.map((instruction) => {
                        return <ListGroup.Item>{instruction}</ListGroup.Item>
                    })}
                </ListGroup>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Recipes;
