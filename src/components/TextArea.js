import React, { useState } from 'react';
import styled from 'styled-components';
import Proofread from './Proofread';
import { BsFillArrowRightSquareFill, BsX } from 'react-icons/bs';

const TextArea = () => {
  const [text, setText] = useState('');
  const [isProofreadOpen, setProofreadOpen] = useState(false);

  const handleTextInput = (e) => {
    return setText(e.target.value);
  };

  const handleProofread = () => {
    return text ? setProofreadOpen(true) : null;
  };

  return (
    <Container>
      {isProofreadOpen && <Proofread isProofreadOpen={isProofreadOpen} />}
      <Header>
        <Status>{text ? '입력중' : '본문을 입력하세요.'}</Status>
        <CloseBtn />
      </Header>
      <TextInput
        placeholder='여기에 영어 문장을 직접 작성하거나 붙여넣기 해주세요. 교정 버튼을 누르면 교정 제안이 하단에 나타납니다.'
        onChange={handleTextInput}
        maxLength='1000'
      ></TextInput>
      <SubmitWrapper>
        <Length> {text.length} / 1000</Length>
        <SubmitBtn onClick={handleProofread} />
      </SubmitWrapper>
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Status = styled.div`
  font-weight: bold;
`;

const CloseBtn = styled(BsX)`
  width: 30px;
  height: 30px;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: none;
  font-size: 1rem;
  font-family: sans-serif;
  resize: none;
  overflow: visible;
  :focus {
    outline: none;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 40px;
  padding: 2px 10px;
  border-top: 1px solid lightgray;
`;

const Length = styled.div`
  font-size: 12px;
  color: lightgray;
`;

const SubmitBtn = styled(BsFillArrowRightSquareFill)`
  width: 24px;
  height: 24px;
  color: orange;
  cursor: pointer;
`;
