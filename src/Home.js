import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css';
import { Link } from 'react-router-dom';
import { Card, Container,Button, Col, Row, Nav } from 'react-bootstrap';
// import { news, recent, reviews } from './Content';
import CCarousel from './C-Carousel';
import BlogPost from './BlogPost'
import logo from './assets/logo.png'
import { useSelector, useDispatch} from 'react-redux'
import {selectContent, deleteContent } from './state/contentSlice'


const Home = () => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent)
    console.log(content)
    const deleteHandler = (index) => {
        console.log('test')
        dispatch(deleteContent(index))
    }
    return (
        <>
            <CCarousel />

            {/* if the category is news then map through here */}
            <Container className='justify-content-center w-75'>
                <Row>
                    <h1>___________<br/><br/>Recent<br/>________________</h1>
                </Row>
                <Row className='cardRow '>
                    {content.map((blogInfo,index) => (
                        <div key={index} className='bg-shadowLarge'>
                            <Link to={`/blogpost/${index}`}>
                                <Card className='mb-2 cards'>
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
                            </Link>
                            <Button onClick={() => deleteHandler(index)}>DIE!</Button>
                        </div>
                    ))}
                </Row>
                {/* <Row>
                <h1>___________<br/><br/>News<br/>________________</h1>
                </Row>
                <Row className='cardRow'>
                    {news.map((blogInfo,index) => (
                        <div className='bg-shadow'>
                            <Link to={`/blogpostnews/${index}`}>
                                <Card className='mb-2 cards'>
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
                            </Link>
                        </div>
                    ))}
                </Row>
                <Row>
                <h1>___________<br/><br/>Reviews<br/>________________</h1>
                </Row>
                <Row className='cardRow'>
                    {reviews.map((blogInfo,index) => (
                        // if then here
                        <div className='bg-shadow'>
                            <Link to={`/blogpostReviews/${index}`}>
                                <Card className='mb-2 cards'>
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
                            </Link>
                        </div>
                    ))}
                </Row> */}
            </Container>
        </>
    )
}

export default Home

