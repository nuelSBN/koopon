import React from 'react';
import { Button } from './styled/Button.styled';
import { Container } from './styled/Container.styled';
import { Input, TextArea } from './styled/Input.styled';
import { FlexCenterColumn } from './styled/FlexCenterColumn.styled';

export default function Form() {
  return (
    <Container>
      <FlexCenterColumn>
        <Input type="email" placeholder="Enter Your Email Address" />
        <TextArea
          placeholder="Make A Review......"
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <Button bg="#FD4543" color="#fff">
          Submit
        </Button>
      </FlexCenterColumn>
    </Container>
  );
}
