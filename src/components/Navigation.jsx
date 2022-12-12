import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {MDBBtn} from 'mdb-react-ui-kit';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-danger">
                    SPA-Francorchamps
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Circuit</Nav.Link>
                        <Nav.Link href="/region">Region</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/formula">Formula One</NavDropdown.Item>
                            <NavDropdown.Item href="/gt3">GT3</NavDropdown.Item>
                            <NavDropdown.Item href="/lmp1">LMP1</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
{/*                     <Nav.Link href="/views">Admin</Nav.Link> */}
                    </Nav>
                    <div className="">
                        <Nav.Link href="/views">
                            <MDBBtn color='danger' size='sm' className="m-1">
                                Admin
                            </MDBBtn>
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;