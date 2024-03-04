import React from 'react'
import { Form,Input,Button } from 'antd';
import styled from 'styled-components';

// defined custom styled component
const StyledForm = styled(Form)`

max-width:300px;
margin:auto;
`;

const StyledFormItems = styled(Form.Item)`
margin-bottom:16px;
`;

const MessageError = styled.div`
color:red;
`;

function NewInventory() {
  const onFinish =(value) =>{
    console.log('Received Value', value);
  }

  const ValidatePassword = (_,values) =>{

    if(!values || values.length <6){
        return Promise.reject('Password must be atleast 6 charater');
    }else{
      return Promise.resolve();
    }
  };

  return (
    <StyledForm 
      name='basic-access'
      initialValues={{remember:true}}
      onFinish={onFinish}>
        <StyledFormItems
          label="Username :"
          name="username"
          rules={[{required:true, message:'Please Enter the Username'}]}>
          <Input placeholder='Enter the Username'/>
        </StyledFormItems>
        <StyledFormItems
        label="Password"
        name='password'
        rules={[{required:true, message:'Please type valid password'},
                {validatePassword:ValidatePassword}
                ]}>
      <Input.Password /> 
      </StyledFormItems> 
      <StyledFormItems>
        <Button
         type='primary'
         htmlType="submit">
          submit
        </Button>
      </StyledFormItems>
      </StyledForm>
  )
}

export default NewInventory;