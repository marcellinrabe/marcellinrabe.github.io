import { useState, useEffect, useRef } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    const stickyHandler = () => {
        const navbar = document.querySelector('header .navbar')

        navbar.classList.toggle('sticky', window.scrollY > 0)
    }
    useEffect(() => {
        window.addEventListener('scroll', stickyHandler)

        return () => {
            window.removeEventListener('scroll', stickyHandler)
        }
    }, [])
    return (
        <header>
            <Navbar
                bg="light"
                expand="lg"
                className={`d-flex justify-content-end d-lg-block navbar position-fixed w-100 px-3`}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-end w-100 gap-3">
                        <Nav.Link href="#profile">Profil</Nav.Link>
                        <Nav.Link href="#skills">Compétences</Nav.Link>
                        <Nav.Link href="#project">Réalisations</Nav.Link>
                        <Nav.Link href="#contact">Contacter-moi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
