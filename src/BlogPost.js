import 'bootstrap/dist/css/bootstrap.min.css'
import './BlogPost.css';
import { useParams, Link } from 'react-router-dom'
import { Card, Container, Col, Row, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import {selectContent,deleteContent } from './state/contentSlice'

const BlogPost = () => {
    const { index } = useParams();
    const content = useSelector(selectContent)
    
    return (
        <Container fluid className='text-center'>
            <Row>
                <Col></Col>
                <Col sm={8}>
                    <Container className='box m-2'>
                        <Col>
                            <h1>__________________<br />{content[index].title}<br /></h1><br />
                            <img
                                alt=""
                                src={content[index].img}
                                width="600"
                                height=""
                                className="d-inline-block"
                            />
                            <br /><br />
                            {content[index].content}
                            <br />
                            __________
                            <br />
                            <img
                                alt=""
                                src={content[index].aimg}
                                width="50"
                                height="50"
                                className="d-inline-block"
                            />
                            <br/>
                            __________
                        </Col>
                    </Container>
                </Col>
                <Col>
                </Col>
                <Col sm={3}>
                    <Container className='box m-2'>
                        {content.map((blogInfo) => (
                            <div className='bg-shadow2'>
                                {/* <Link to={`/blogpostnews/${index}`}> */}
                                <Card className='mb-2 cards1'>
                                    <Card.Img src={blogInfo.img} />
                                    <Card.Body>
                                        <Card.Title>
                                            {blogInfo.title}
                                        </Card.Title>
                                        {blogInfo.body}
                                        <br />
                                        {blogInfo.author}
                                        <img
                                            alt=""
                                            src={blogInfo.aimg}
                                            width="50"
                                            height="50"
                                            className="d-inline-block"
                                        />
                                        {blogInfo.date}
                                    </Card.Body>
                                </Card>
                                {/* </Link> */}
                            </div>
                        ))}

                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogPost


