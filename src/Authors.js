import './Authors.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Ricardo from './assets/ricardo.png'
import Kermit from './assets/Kermit.png'
import Knuckles from './assets/knuckles.png'
import Chicken from './assets/chicken.png'
import Squid from './assets/Squidward.png'




const Authors = () => {
    return (
        <Container fluid className='text-center'>
            <Row className='p-5'>
                <Col>
                    <img
                        alt=""
                        src={Ricardo}
                        width="150"
                        height="150"
                        className="d-inline-block"
                    />
                </Col>
                <Col>
                    <img
                        alt=""
                        src={Kermit}
                        width="150"
                        height="150"
                        className="d-inline-block"
                    />
                </Col>
                <Col>
                    <img
                        alt=""
                        src={Knuckles}
                        width="150"
                        height="150"
                        className="d-inline-block"
                    />
                </Col>

            </Row>
            <Row className='p-5'>
                <Col>
                </Col>
                <Col>
                    <img
                        alt=""
                        src={Chicken}
                        width="150"
                        height="150"
                        className="d-inline-block"
                    />
                </Col>
                <Col>
                    <img
                        alt=""
                        src={Squid}
                        width="150"
                        height="150"
                        className="d-inline-block"
                    />
                </Col>
                <Col>
                </Col>
            </Row>

        </Container>
    )
}


export default Authors
