import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, fetchNotes } from '../store/loginSlice';

function Notes() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  const data = useSelector((state) => state.login.data);
  useEffect(() => {
    if (token.token) {
      dispatch(fetchNotes(token));
    }
  }, [token.token, token.data]);

  return (
    <>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '500px', minWidth: '600px' }}
      >
        <Card>
          <Card.Body>
            <ul>
              {data.loading && <h2>Loading...</h2>}
              {!data.loading && data.error ? (
                <div>Error: {data.error}</div>
              ) : null}
              {!data.loading &&
                data.map((item, index) => (
                  <li key={index}>
                    <Card.Text>
                      Title: ${item.title} <br />
                      Body: ${item.body}
                    </Card.Text>
                  </li>
                ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
      <Link to='/notescreate'>
        <Button>Create Notes</Button>
      </Link>
    </>
  );
}

export default Notes;
