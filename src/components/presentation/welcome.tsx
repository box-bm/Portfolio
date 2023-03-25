import { Text, useTheme } from "@nextui-org/react";

const Welcome = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Text h3>Hello everyone, I'm</Text>
      <Text
        h1
        size={60}
        css={{
          lineHeight: 1,
          textGradient: `45deg, ${theme!.colors.primary.value} 0%, ${theme!.colors.secondary.value} 50%`,
        }}
        weight="bold"
      >
        Brandon Manzo
      </Text>
      <Text h2>Full Stack Devloper</Text>
    </div>
  );
};

export default Welcome;
