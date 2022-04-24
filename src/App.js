import React from 'react';
import styled from 'styled-components';
import DraftJS from './components/DraftJS';

const App = () => {
  return (
    <Container>
      <DraftJS />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 700px;
  margin: 50px;
`;
