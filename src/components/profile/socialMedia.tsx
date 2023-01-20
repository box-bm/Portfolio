import styled from "styled-components";
import socialMedia from "../../data/socialMedia";
import useThemeDetector from "../../hooks/useThemeDetector";
import { IconButton } from "../buttons";

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMedia: React.FC = () => {
  const isDark = useThemeDetector();

  const onPress = (url: string) => {
    window.open(url);
  };

  return (
    <SocialMediaContainer>
      {socialMedia.map(({ icon: Icon, color, darkColor, name, url }) => (
        <IconButton
          key={name}
          color={isDark ? darkColor : color}
          onClick={() => onPress(url)}
        >
          {<Icon />}
        </IconButton>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMedia;
