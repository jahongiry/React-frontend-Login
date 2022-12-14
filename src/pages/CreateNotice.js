import { useContext, useRef } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import AuthContext from '../components/shared/AuthContext';
import { Link } from 'react-router-dom';
import Notes from './Notes';
import axios from 'axios';
import { fetchCreateNotes } from '../store/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const CreateNotice = () => {
  const dispatch = useDispatch();
  const title = useRef('');
  const body = useRef('');

  const loginHandler = async () => {
    let payload = {
      title: title.current.value,
      body: body.current.value,
    };
    dispatch(fetchCreateNotes(payload));
  };

  return (
    <>
      <Container className='mt-2'>
        <Row>
          <Col className='col-md-8 offset-md-2'>
            <legend>Create Notes</legend>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' ref={title} placeholder='Enter title' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Body</Form.Label>
              <Form.Control type='text' ref={body} placeholder='Enter body' />
            </Form.Group>
            <Link to='/notes'>
              <Button variant='primary' type='button' onClick={loginHandler}>
                Create
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateNotice;
