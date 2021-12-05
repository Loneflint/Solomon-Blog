import { Form, Modal, Container, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContent, selectContent } from './state/contentSlice'


const Admin = ({ defaultContent, setShow, show }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent);
    const [response, setResponse] = useState({ title: '' })

    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }
    const handleClose = () => setShow(false);

    const resetSite = () => {
        handleClose();
        localStorage.setItem('storedContent', JSON.stringify(defaultContent));
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        let updateContentArr = [
            ...content, response];
                console.log(updateContentArr)
        if (response.title) {
            dispatch(addContent(updateContentArr))
            setResponse({})
        }
    }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Title>Update Content</Modal.Title>
                <Form className='bg-secondary'>
                    <Form.Control className='bg-light m-1 text-secondary' size='lg' placeholder='title' name='title' onChange={updateField}/>
                </Form>
                <Modal.Footer className='bg-dark'>
                    <Button size='sm' variant='secondary' onClick={resetSite}>Reset Site</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Admin;