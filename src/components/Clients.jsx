import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { TbBrandAmongUs, TbBrandNpm, TbBrandGit, TbBrandSublimeText, TbBrandPaypal } from "react-icons/tb";


const Clients = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <section id="clients" className="clients py-5 bg-black">
            <Container>
                <div className="section-title pb-4 text-start">
                    <h2 className="text-uppercase fw-bold m-0">NUESTROS CLIENTES</h2>
                    <p className="golden fw-bolder">Conocé nuestros clientes</p>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <TbBrandNpm className="d-block mx-auto" />
                        <Carousel.Caption>
                        <h3>npm</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TbBrandGit className="d-block mx-auto" />
                        <Carousel.Caption>
                        <h3>git</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TbBrandSublimeText className="d-block mx-auto" />
                        <Carousel.Caption>
                        <h3>sublime text</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TbBrandPaypal className="d-block mx-auto" />
                        <Carousel.Caption>
                        <h3>paypal</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TbBrandAmongUs className="d-block mx-auto" />
                        <Carousel.Caption>
                        <h3>sus</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default Clients;
