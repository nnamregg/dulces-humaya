import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import headerLogo from '../assets/logo/h-ddl_100x100.png';

function Header() {

    return (
        <header className="fixed-top d-flex align-items-center bg-black bg-gradient bg-opacity-75">
            <Container fluid="xl">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="d-flex justify-content-lg-between">
                    <Navbar.Brand href='#' className="me-auto" >
                        <Image src={headerLogo} width={60} className="me-2"/>
                        HUMAYA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsiveNavbar" />
                    <Navbar.Collapse id="responsiveNavbar" className="flex-grow-0">
                        <Nav>
                            <Nav.Link href="#hero">Home</Nav.Link>
                            <Nav.Link href="#quality">Calidad</Nav.Link>
                            <Nav.Link href="#products">Productos</Nav.Link>
                            <Nav.Link href="#">Quiénes somos</Nav.Link>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
