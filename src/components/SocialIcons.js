import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StyledSocialIcons } from './styled/SocialIcon.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="h" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="h" target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="h" target="_blank">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="h" target="_blank">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
