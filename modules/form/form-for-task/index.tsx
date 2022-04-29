import * as React from 'react';
// views
import { Button } from '@md-modules/shared/components/ui/button';
import { ContentWrapper } from '@md-modules/shared/views/common';
import { ButtonWrapper, FormWrapper } from '../views';
import { Input, InputTitle, ITdescription } from './views';
import { useInput } from './custom-hooks';




const FormAuth = () => {
 
  const firstname = useInput('', {isEmpty: true, minLength: 5, maxLength: 50})
  const lastname = useInput('', {isEmpty: true, minLength: 5, maxLength: 50})
  const email = useInput('', {isEmpty: true, isEmail: false})
  const phone = useInput('', {isEmpty: true, minLength: 10, onlyNumbers: false})
  const password = useInput('', {isEmpty: true, minLength: 1, minOneUpLetter: false})

  const consoleLog = () => {
    console.log(`
    your firstname is (${firstname.value})
    your lastname is (${lastname.value})
    your email is (${email.value})
    your phone is (${phone.value})
    your password is (${password.value})`
    )
  }

    return (
        <ContentWrapper>
          <FormWrapper >
            <InputTitle>Firstname</InputTitle>
            {(firstname.isdirty && firstname.isempty) && <ITdescription>(field cannot be empty)</ITdescription>}
            {(firstname.isdirty && firstname.minLengthError) && <ITdescription>(must be more than 5 characters)</ITdescription>}
            {(firstname.isdirty && firstname.maxLengthError) && <ITdescription>(must be less than 10 characters)</ITdescription>}
            <Input onChange={e => firstname.onChange(e)} onBlur={e => firstname.onBlur(e)} value={firstname.value}  />

            <InputTitle>Lastname</InputTitle>
            {(lastname.isdirty && lastname.isempty) && <ITdescription>(field cannot be empty)</ITdescription>}
            {(lastname.isdirty && lastname.minLengthError) && <ITdescription>(must be more than 5 characters)</ITdescription>}
            {(lastname.isdirty && lastname.maxLengthError) && <ITdescription>(must be less than 10 characters)</ITdescription>}
            <Input onChange={e => lastname.onChange(e)} onBlur={e => lastname.onBlur(e)} value={lastname.value}  />

            <InputTitle>E-mail</InputTitle>
            {(email.isdirty && email.isempty) && <ITdescription>(field cannot be empty)</ITdescription>}
            {(email.isdirty && email.emailError) && <ITdescription>(noncorrect e-mail)</ITdescription>}
            <Input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} />

            <InputTitle>Phone</InputTitle>
            {(phone.isdirty && phone.isempty) && <ITdescription>(field cannot be empty)</ITdescription>}
            {(phone.isdirty && phone.onlyNumbers) && <ITdescription>(only numbers)</ITdescription>}
            {(phone.isdirty && phone.minLengthError) && <ITdescription>(must be more than 9 characters)</ITdescription>}
            <Input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} value={phone.value}  />

            <InputTitle>Password</InputTitle>
            {(password.isdirty && password.isempty) && <ITdescription>(min one character)</ITdescription>}
            {(password.isdirty && password.oneUpLetter) && <ITdescription>(min one upper letter)</ITdescription>}
            <Input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} />

            <ButtonWrapper>
              <Button type='button' onClick={consoleLog}>
                Submit Form
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </ContentWrapper>
      );
    };
    
    export { FormAuth };


