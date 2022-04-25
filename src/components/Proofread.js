import React from 'react';
import styled from 'styled-components';

const Proofread = () => {
  return (
    <Container>
      <Suggestion>Proofread</Suggestion>
    </Container>
  );
};

export default Proofread;

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50vh + 100px;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px lightgray;
`;

const Suggestion = styled.div``;
