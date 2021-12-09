import React from 'react';
import { Image, Logo, Nav, StyledHeader } from './styled/Header.styled';
import { Container } from './styled/Container.styled';
import { Button } from './styled/Button.styled';
import { Flex } from './styled/Flex.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/koopon.svg" alt="logo" />
          {/* <h1>nuelSBN</h1> */}
          <Button>Visit Our Store</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Shopa Connect</h1>
            <p>
              We connect and engage consumers to influence purchase decisions
              both online and in store using strategic promotions,deals and
              discounts coupons and Vouchers
            </p>
            <Button bg="#FD4543" color="#fff">
              Visit Our Store
            </Button>
          </div>
          <Image src="./images/sale1.jpg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
