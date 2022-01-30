import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const CardImgWrapper = styled.div`
  padding: 55% 0 0 0;
  position: relative;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 10px 10px;

  a {
    text-decoration: none;
  }
`;

export const CardFooterTitle = styled.h5`
  font-weight: bold;
  line-height: 1.28;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;
