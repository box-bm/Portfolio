import { ReactNode } from "react";

interface MainProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main
      className="container mx-auto px-4"
      style={{
        boxSizing: "border-box",
        height: "auto",
        overflow: "hidden",
        marginBottom: 50,
      }}
    >
      {children}
    </main>
  );
};
