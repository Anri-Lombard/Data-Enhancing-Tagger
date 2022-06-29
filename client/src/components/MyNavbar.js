import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, NavItem, NavLink} from "react-bootstrap"

function MyNavbar() {
    return (
        <Navbar className='d-flex flex flex-shrink-0 p-3 text-white bg-dark'>
            <NavItem>Data Tagger Enhancer</NavItem>
            <NavLink href="https://wikipedia.org" target="_blank">
            Logout
            </NavLink>
        </Navbar>       
    );
}

export default MyNavbar