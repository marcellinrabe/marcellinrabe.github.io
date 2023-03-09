import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    /* const [active, setActive] = useState({
        last: null,
        current: null,
    }); */

    const stickyHandler = () => {
        const navbar = document.querySelector('header .navbar');

        navbar.classList.toggle('sticky', window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHandler);

        return () => {
            window.removeEventListener('scroll', stickyHandler);
        };
    }, []);

    const onClick = (event) => {
        setActive(() => ({
            last: active.current,
            current: event.currentTarget,
        }));
    };

    /* useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            if (active.last === null && active.current === null) {
                setActive({
                    last: document.querySelector('header #profile'),
                    current: document.querySelector('header #profile'),
                });
            }
        });

        if (active.last && active.current) {
            active.last.classList.remove('active');
            active.current.classList.add('active');
        }
    }, [active]); */

    return (
        <header>
            <Navbar
                bg="light"
                expand="lg"
                className={`d-flex justify-content-end d-lg-block navbar position-fixed w-100 px-3`}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-lg-end w-100 gap-3 text-center flex-grow-1">
                        <Nav.Link
                            href="#profile"
                            onClick={onClick}
                            className="nav__nav-link p-2 rounded"
                        >
                            Profil
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            onClick={onClick}
                            className="nav__nav-link  p-2 rounded"
                        >
                            Compétences
                        </Nav.Link>
                        <Nav.Link
                            href="#project"
                            onClick={onClick}
                            className="nav__nav-link  p-2 rounded"
                        >
                            Réalisations
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            onClick={onClick}
                            className="nav__nav-link  p-2 rounded active"
                        >
                            Contacter-moi
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
