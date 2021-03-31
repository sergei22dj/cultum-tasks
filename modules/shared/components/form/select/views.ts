// libs
import styled from 'styled-components';
// types
import { defaultTheme, StylesConfig } from 'react-select';
import { Option } from '@md-shared/components/form/select/index';
// themes
import { colors } from '@md-styles/styled/theme';

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const reactSelectTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: colors.yellow400,
    primary25: defaultTheme.colors.neutral10,
    primary50: defaultTheme.colors.neutral10,
    primary75: defaultTheme.colors.neutral10
  }
};

interface SelectStylesProps {
  isError: boolean;
  isSuccess?: boolean;
  isFocused: boolean;
  isDisabled: boolean;
}

export const getSelectStyles = ({ isFocused, isError, isDisabled }: SelectStylesProps): StylesConfig<Option, any> => {
  return {
    container: (provided) => ({
      ...provided,
      outline: 'none'
    }),
    control: (provided) => ({
      ...provided,
      boxShadow: 'none',
      outline: 'none',
      height: '52px',
      transition: 'border none',
      border: `${isFocused ? 2 : 1}px ${isDisabled ? 'dotted' : 'solid'} ${isError ? colors.red500 : colors.yellow400}`,
      ':hover': {
        border: `${isFocused ? 2 : 1}px solid ${isError ? colors.red500 : colors.yellow400}`
      }
    }),
    multiValue: (provided) => ({
      ...provided,
      padding: '5px',
      borderRadius: '4px'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return {
        ...provided,
        opacity,
        transition
      };
    }
  };
};
