import { NavbarCollapse } from 'flowbite-react/lib/esm/components/Navbar/NavbarCollapse';
import { NavbarToggle } from 'flowbite-react/lib/esm/components/Navbar/NavbarToggle';
import { Navbar } from 'flowbite-react/lib/esm/components';

export default function NavBar() {
    return (
        <header className="pb-[10vh]">
            <Navbar
                fluid={true}
                className="fixed items-center bg-white border-b w-full container z-20"
            >
                <Navbar.Brand href="#profile">
                    <span className="self-center font-logo whitespace-nowrap text-xl font-medium dark:text-white">
                        @marcellinrabe
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="self-start">
                    <Navbar.Link href="#skills">Compétences</Navbar.Link>
                    <Navbar.Link href="#project">Réalisations</Navbar.Link>
                    <Navbar.Link href="#contact">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
