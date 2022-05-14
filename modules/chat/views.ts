import styled from 'styled-components';

export const ChatWrapper = styled.div`
display: flex;
align-items: flex-start;
`;

export const DialogContentWrapper = styled.div`
width: 100%;
max-width: calc(100% - 20vh);
display: flex;
flex-direction: column;
margin-left: 20vh;
margin-bottom: 70px;
`;

export const SelectBar = styled.div`
display: flex;
flex-direction: column;
`;

export const DialogInput = styled.input`
  width: 100%;
  height: 70px;
  margin: 10px auto;
  position: relative;
`;

export const InputBar = styled.div`
 display: flex;
 width: calc(100% - 20vh);
 align-items: center;
 position: fixed;
 bottom: 0;
`;

export const SendButton = styled.button`
 width: 100px;
 height: 70px;
 border: none; 
`;

export const DialogWrapperSender = styled.div`
display: flex;
margin: 10px 0
`;

export const DialogWrapperConsumer = styled.div`
display: flex;
flex-direction: row-reverse;
margin: 10px 0
`

export const MessageWrapper = styled.div`
display: flex;
align-items: center;
max-width: 100%;
height: 100%;
min-height: 65px;
border: 1px solid red;
border-radius: 15px;
background-color: white;
`;

export const DialogImage = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`;

export const DialogMessage = styled.p`
margin-left: 10px;
font-size: 24px;
`;

export const DialogSendTime = styled.p`
margin: auto 5px 0 auto;
`