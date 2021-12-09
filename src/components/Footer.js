import SocialIcons from './SocialIcons';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex.styled';
import { StyledFooter } from './styled/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/koopon.svg" alt="logo" />
        {/* <h1>nuelSBN</h1> */}

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              laborum voluptate praesentium sit ea laboriosam pariatur nisi
              explicabo corporis nulla?
            </li>
            <li>+234-813-092-7934</li>
            <li>echinedu007@gmail.com</li>
          </ul>
          <ul>
            <li>About Use</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Koopon. All rights Reserved</p>
      </Container>
    </StyledFooter>
  );
}
