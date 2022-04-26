import React from 'react';
import styled from 'styled-components';
import DraftJS from './components/DraftJS/DraftJS';
import EditorComponent from './components/ReactQuill/Editor';
// import TextArea from './components/TextArea';

const App = () => {
  return (
    <Container>
      <DraftJS />
      <EditorComponent />
      {/* <TextArea /> */}
    </Container>
  );
};

export default App;

const Container = styled.div``;
