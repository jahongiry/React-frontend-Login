import React from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '500px', minWidth: '600px' }}
      >
        <Card>
          <Card.Body>
            <Card.Text>testing jwt Cookie</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;
