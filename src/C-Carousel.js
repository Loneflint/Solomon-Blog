import { Container, Carousel } from 'react-bootstrap';
import './C-Carousel.css'
import Tesla from './assets/tesla-roadster.jpg'
import Renewable from './assets/renewable-energy.jpg'
import Crypto from './assets/Crypto.jpg'
import Earthship from './assets/Earthship.jpg'
import Ai from './assets/ai-and-dev.jpg'


function CCarousel() {
    return (
        <Container className='pics'>
            <Carousel className=''>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Tesla}
                        alt="First slide"
                        margin='auto'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Renewable}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Crypto}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Earthship}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Ai}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CCarousel


