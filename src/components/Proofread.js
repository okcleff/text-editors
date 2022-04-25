import React from 'react';
import styled from 'styled-components';
import { BsX } from 'react-icons/bs';

const Proofread = ({ closeProofread }) => {
  return (
    <Container>
      <Suggestion>
        <CloseBtn onClick={closeProofread} />
        Proofread
      </Suggestion>
      <ModalBackground onClick={closeProofread} />
    </Container>
  );
};

export default Proofread;

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  opacity: 0.6;
  z-index: 0;
`;

const Suggestion = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 20px lightgray;
  z-index: 1;
`;

const CloseBtn = styled(BsX)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
