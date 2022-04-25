import React from 'react';
import styled from 'styled-components';
import DraftJS from './components/DraftJS';
import TextArea from './components/TextArea';

const App = () => {
  return (
    <Container>
      {/* <DraftJS /> */}
      <TextArea />
    </Container>
  );
};

export default App;

const Container = styled.div``;
