export const Section = ({ css, ...props }: { css?: React.CSSProperties;[key: string]: any }) => (
  <section style={{ boxSizing: "border-box", ...css }} {...props} />
);
