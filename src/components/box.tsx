export const Box = ({ css, ...props }: { css?: React.CSSProperties;[key: string]: any }) => (
  <div style={{ boxSizing: "border-box", ...css }} {...props} />
);
