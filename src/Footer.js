import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/Bright.png'
import ScrollToTop from 'react-scroll-to-top';

function Footer() {
    return (
        <Navbar className=' h-25 w-100 bg-newcolor2'>
                <Container fluid className='justify-content-end'>
                <ScrollToTop/>
                    <Nav.Item>
                        <img
                            alt=""
                            src={logo}
                            width="150"
                            height="150"
                            className="d-inline-block "
                        />{' '}
                    </Nav.Item>
                </Container>
            </Navbar>
    )
}

export default Footer
