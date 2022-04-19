import { Button } from '@md-modules/shared/components/ui/button';
import { ContentWrapper } from '@md-modules/shared/views/common';
import * as React from 'react';
import { ButtonWrapper, FormWrapper } from '../views';

const FormAuth = () => {

    return (
        <ContentWrapper>
          <FormWrapper >
            
    
            <ButtonWrapper>
              <Button type='submit' >
                Submit Form
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </ContentWrapper>
      );
    };
    
    export { FormAuth };