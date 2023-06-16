import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import headerLogo from '../assets/logo/h-ddl_100x100.png';

function Header() {

    return (
        <header className="fixed-top d-flex align-items-center bg-black bg-opacity-75 border-bottom border-dark">
            <Container fluid="xl">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="d-flex justify-content-lg-between">
                    <Navbar.Brand href='#' className="me-auto" >
                        <Image src={headerLogo} width={40} className="me-2" alt="Logo Header" />
                        HUMAYA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsiveNavbar" />
                    <Navbar.Collapse id="responsiveNavbar" className="flex-grow-0">
                        <Nav className="fw-medium">
                            <Nav.Link href="#hero" className="mx-2">Home</Nav.Link>
                            <Nav.Link href="#quality" className="mx-2">Calidad</Nav.Link>
                            <Nav.Link href="#products" className="mx-2">Productos</Nav.Link>
                            <Nav.Link href="#about" className="mx-2">Quiénes somos</Nav.Link>
                            <Nav.Link href="#clients" className="mx-2">Clientes</Nav.Link>
                            <Nav.Link href="#recipes" className="mx-2">Recetas</Nav.Link>
                            <Nav.Link href="#contact" className="mx-2">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
