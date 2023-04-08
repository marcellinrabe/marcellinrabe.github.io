import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    const onClick = (event) => {
        setActive(() => ({
            last: active.current,
            current: event.currentTarget,
        }));
    };

    return (
        <header>
            <Navbar
                bg="white"
                expand="lg"
                className={`h-[15vh] items-center flex justify-content-end d-lg-block navbar position-fixed w-100 px-3`}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="h-100">
                    <Nav className="flex justify-center w-100  text-center flex-grow-1">
                        <Nav.Link href="#profile" onClick={onClick}>
                            Profil
                        </Nav.Link>
                        <Nav.Link href="#skills" onClick={onClick}>
                            Compétences
                        </Nav.Link>
                        <Nav.Link href="#project" onClick={onClick}>
                            Réalisations
                        </Nav.Link>
                        <Nav.Link href="#contact" onClick={onClick}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
