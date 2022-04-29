import * as React from 'react';

interface Validations {
    isEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    onlyNumbers?: boolean;
    minOneUpLetter?: boolean;


}

export const useValidation = (value: string, validations: Validations) => {
  const [minLengthError, setMinLengthError] = React.useState(false)
  const [maxLengthError, setMaxLengthError] = React.useState(false)
  const [emailError, setEmailerror] = React.useState(false)
  const [onlyNumbers, setOnlyNumbers] = React.useState(false)
  const [oneUpLetter, setOneUpLetter] = React.useState(false)
  const [isempty, setEmpty] = React.useState(true)

  React.useEffect(() => {
    for (const validation in validations) {
      switch(validation) {
        case 'minLength':
            value.length < validations[validation]! ? setMinLengthError(true) : setMinLengthError(false)
        break;
        case 'maxLength': 
            value.length > validations[validation]! ? setMaxLengthError(true) : setMaxLengthError(false)
        break;

        case 'isEmpty' :
            value ? setEmpty(false) : setEmpty(true)
        break;
        
        case 'isEmail':
            const regMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            regMail.test(String(value).toLowerCase()) ? setEmailerror(false) : setEmailerror(true)
        break;

        case 'onlyNumbers': 
          const regNum = /^\d+$/;
          regNum.test(String(value)) ? setOnlyNumbers(false) : setOnlyNumbers(true)
        break;
        
        case 'minOneUpLetter':
          const regLet = /^.*[A-Z]+.*$/
          regLet.test(String(value)) ? setOneUpLetter(false) : setOneUpLetter(true)
          
      }
    }
  }, [value])

  return {
    minLengthError,
    isempty,
    maxLengthError,
    emailError,
    onlyNumbers,
    oneUpLetter
  }
}

export const useInput = (initialValidation: string, validations: Validations) => {
  const [value, setValue] = React.useState(initialValidation)
  const [isdirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations)
 
  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value)
  }

  const onBlur = (_e: any) => {
    setDirty(true)
  }

  return{
    value,
    isdirty,
    onChange,
    onBlur,
    ...valid
  }
};
