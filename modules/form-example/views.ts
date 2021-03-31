import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.gray600};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.yellow400};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 40px;
  margin: 0 auto;
  outline: none;
  width: 120px;

  :active {
    border-width: 2px;
    top: 2px;
  }
`;
