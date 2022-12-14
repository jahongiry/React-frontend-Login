import { useContext, useRef } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import AuthContext from '../components/shared/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, fetchNotes } from '../store/loginSlice';

const Login = () => {
  const username = useRef('');
  const password = useRef('');
  const dispatch = useDispatch();
  const loginHandler = async () => {
    let payload = {
      username: username.current.value,
      password: password.current.value,
    };
    dispatch(fetchLogin(payload));
  };

  return (
    <>
      <Container className='mt-2'>
        <Row>
          <Col className='col-md-8 offset-md-2'>
            <legend>Login Form</legend>
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
            <Link to='/notes'>
              <Button variant='primary' type='button' onClick={loginHandler}>
                Log in
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
