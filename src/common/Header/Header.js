import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{color:'orange'}} >Bikers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="/additem">Add</Nav.Link>
                                <Nav.Link as={Link} to="/manageitem">Manage</Nav.Link>
                                <Nav.Link as={Link} to="/myitem">My items</Nav.Link>
                                </>
                            }
                            { user?
                            <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                            :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link> }   
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;