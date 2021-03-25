import styled, { css } from 'styled-components';

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

export const Text = styled.span`
  margin-top: 4px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div<{ toggled: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: -60px;

  ${({ theme }) => theme.templates.centerItems};

  ${({ toggled }) =>
    toggled &&
    css`
      ${Checkbox} {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      ${Button} {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      ${Label} {
        background-color: ${({ theme }) => theme.colors.green200};
      }
    `}
`;
