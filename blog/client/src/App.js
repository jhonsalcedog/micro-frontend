import React from 'react';
import PostCreate from './PostCreate';

import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import 'emerald-ui/lib/styles.css';

export default () => {
  return (
    <div>
      <Container>
        <h1>Create Post</h1>
        <PostCreate />
      </Container>
    </div>
  );
};
