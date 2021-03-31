import { css } from 'styled-components';

export const buttonPresets = {
  details: css`
    padding: 5px 10px;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.yellow400};
    color: #fff;
    outline: none;
    transition: background-color 0.2s linear;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow400};
    }
  `,

  default: css`
    padding: 10px 20px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.gray600};
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.yellow400};
    color: #fff;
    outline: none;
    transition: background-color 0.2s linear;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow400};
    }

    :active {
      opacity: 0.9;
    }
  `
};

export type ButtonPresets = keyof typeof buttonPresets;
