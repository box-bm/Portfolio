import { Text, useTheme } from "@nextui-org/react";
import { Box } from "../box";

const NameTitle = () => {
  const { theme } = useTheme();

  return (
    <Box>
      <Text h4>Hello everyone, I'm</Text>
      <Text
        h1
        size={60}
        css={{
          lineHeight: 1,
          textGradient: `45deg, ${theme!.colors.primary.value} 0%, ${
            theme!.colors.success.value
          } 90%`,
        }}
        weight="bold"
      >
        Brandon Manzo
      </Text>
      <Text
        h3
        css={{
          lineHeight: 1,
        }}
      >
        Full Stack Devloper
      </Text>
    </Box>
  );
};

export default NameTitle;
