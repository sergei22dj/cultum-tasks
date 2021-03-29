import styled, { css } from 'styled-components';

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const Button = styled.span`
  content: '';
  position: absolute;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  width: 54px;
  height: 28px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  padding: 0 2px;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

export const Wrapper = styled.div<{ toggled: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  ${({ theme }) => theme.templates.centerItems};

  ${({ toggled }) =>
    toggled &&
    css`
      ${Button} {
        left: calc(100% - 1px);
        transform: translateX(-100%);
      }
    `}
`;
