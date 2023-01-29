import styled from "styled-components";
import socialMedia from "../../data/socialMedia";
import useThemeDetector from "../../hooks/useThemeDetector";
import { IconButton } from "../buttons";

type Props = {
  reduceColors?: boolean;
};

const SocialMediaContainer = styled.div<Props>`
  display: flex;
  gap: 10px;
`;

const SocialMedia: React.FC<Props> = (props) => {
  const { reduceColors = false } = props;
  const isDark = useThemeDetector();

  const onPress = (url: string) => {
    window.open(url);
  };

  return (
    <SocialMediaContainer>
      {socialMedia.map(({ icon: Icon, color, darkColor, name, url }) => (
        <IconButton
          key={name}
          color={reduceColors ? "white" : isDark ? darkColor : color}
          onClick={() => onPress(url)}
        >
          {<Icon size="100%" />}
        </IconButton>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMedia;
