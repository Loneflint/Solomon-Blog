import { Container, Navbar, Nav, Button, } from 'react-bootstrap';
import Decal from './assets/Tleft.png'
import logo from './assets/logo.png'
import Youtube from './assets/youtube-logo-png-46027.png'
import Twitter from './assets/logo-twitter-png-5860.png'
import Discord from './assets/discord-logo-png-7625.png'
import './Nav.css';
import Modal from 'react-bootstrap/Modal'
import React, { useEffect, useState } from "react";
import Admin from './Admin'
import content from '../src/Content'

function NavMain() {
    const [show, setShow] = useState(false);
    const handleShowAdmin = () => {
        setShow(true);
    }
    const [content1, setContent] = useState(content)

    return (
        <Navbar className='h-25 w-100 bg-newcolor2'>
            <Container className='w-100'>
                <Nav.Item>
                    <img
                        alt=""
                        src={Decal}
                        width="150"
                        height="150"
                        className="d-inline-block  Decal"
                    />{' '}
                </Nav.Item>
            </Container>
            <Container className='p-2 w-100 justify-content-center'>
                <Nav.Item className='w-25'>

                </Nav.Item>
                <Container></Container>
                <Nav.Link className="text-center" eventKey="Authors" href="/Authors">
                    <Button variant='light'>Authors</Button>
                </Nav.Link>
                {Contact()}
                <Button onClick={handleShowAdmin}>Admin</Button>
                
                <Admin defaultContent={content} setShow={setShow} show={show}/>

                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="170"
                        height="90
"
                        className="d-inline-block"
                    />{' '}
                </Navbar.Brand>

            </Container>
        </Navbar>
    )
}


function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Contact Me
            </Button>

            <Modal centered={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Nav.Link className="text-center d-inline-block" eventKey="link-" href="https://www.youtube.com/channel/UC63sdKwlQxOtXZhcbuFgnbQ"><img width="50" height="33" className="d-inline-block" src={Youtube}></img></Nav.Link>
                    <Nav.Link className="text-center d-inline-block" eventKey="link-" href="https://twitter.com/?lang=en"><img width="40" height="35" className="d-inline-block" src={Twitter}></img></Nav.Link>
                    <Nav.Link className="text-center d-inline-block" eventKey="link-" href="https://discord.gg/5NTUFa599h"><img width="35" height="35" className="d-inline-block" src={Discord}></img></Nav.Link>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavMain
