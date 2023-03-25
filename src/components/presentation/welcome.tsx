import { Text, useTheme } from "@nextui-org/react";

const Welcome = () => {
  const { theme } = useTheme();

  return (
    <>
      <Text h2>Hello everyone, I'm</Text>
      <Text
        h1
        size={60}
        css={{
          lineHeight: 1,
          textGradient: `45deg, ${theme?.colors.primary.value} -20%, ${theme?.colors.secondary.value} 50%`,
        }}
        weight="bold"
      >
        Brandon Manzo
      </Text>
    </>
  );
};

export default Welcome;
