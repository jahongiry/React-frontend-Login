import { useRef } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchSignUp } from '../store/loginSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const dispatch = useDispatch();
  const username = useRef('');
  const password = useRef('');

  const loginHandler = async () => {
    let payload = {
      username: username.current.value,
      password: password.current.value,
    };
    dispatch(fetchSignUp(payload));
  };
  return (
    <>
      <Container className='mt-2'>
        <Row>
          <Col className='col-md-8 offset-md-2'>
            <legend>Sign up Form</legend>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>username</Form.Label>
              <Form.Control
                type='text'
                ref={username}
                placeholder='Enter username'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={password}
                placeholder='Enter password'
              />
            </Form.Group>
            <Link to='/notescreate'>
              <Button variant='primary' type='button' onClick={loginHandler}>
                Sign up
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
