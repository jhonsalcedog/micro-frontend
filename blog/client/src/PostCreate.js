import React, { useState } from 'react';
import TextField from 'emerald-ui/lib/TextField';
import axios from 'axios';
import Button from 'emerald-ui/lib/Button';
import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

export default () => {
  const [title, setTitle] = useState('');

  function handleChange(e) {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }

  async function sendTitle(e) {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    console.log('enviando');
    setTitle('');
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <form onSubmit={sendTitle}>
              <TextField label="Title" value={title} onChange={handleChange} />
              <Button type="submit">Buttton</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
