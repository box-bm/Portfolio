import { Box } from "../box";

const NameTitle = () => {
  return (
    <Box>
      <h4 className="text-lg">Hello everyone, I&apos;m</h4>
      <h1
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-success"
      >
        Brandon Manzo
      </h1>
      <h3 className="text-2xl" style={{ lineHeight: 1 }}>
        Full Stack Developer
      </h3>
    </Box>
  );
};

export default NameTitle;
