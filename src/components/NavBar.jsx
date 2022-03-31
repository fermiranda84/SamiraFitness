
import { Container, Navbar, Nav} from 'react-bootstrap'
// import { HashLink as Link } from 'react-router-hash-link'
import Image from 'react-bootstrap/Image'
import imgCarrito from'../images/cart4.svg'
import { Outlet, Link } from "react-router-dom"

export const NavBar = () => {
    return(

        <>
        <Navbar className='nav' variant='light' expand="lg">
            <Container className='d-flex justify-content-between'>
                <div>
                    <Navbar.Brand as={Link} to="/">SAMIRA FITNESS</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto h6">
                        <Navbar.Text className='mx-3 fw-bold' as={Link} to="/">Home</Navbar.Text>
                        <Navbar.Text className='mx-3 fw-bold' as={Link} to="/programas">Programas</Navbar.Text>
                        <Navbar.Text className='mx-3 fw-bold' as={Link} to="/contacto">Contacto</Navbar.Text>
                        <Navbar.Text className='mx-3 fw-bold' as={Link} to="/sobre-mi">Sobre mí</Navbar.Text>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <Nav.Link className='mx-2' as={Link} to="/carrito"><Image className='iconoCarrito' src={imgCarrito} fluid /></Nav.Link>
                </div>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}