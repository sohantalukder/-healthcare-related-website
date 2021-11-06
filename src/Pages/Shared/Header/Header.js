import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>


                    <Navbar.Brand href="#home" className='banner-logo justify-content-start'>
                        <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/vproject291batch36-nunoon-43-medical_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d5876e2c3131ea957bbda9cd45c67c7f' alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>Appointments</Nav.Link>
                        <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant='light'>LogOut</Button> :

                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>




                </Container>
            </Navbar>


        </>
    );
};

export default Header;