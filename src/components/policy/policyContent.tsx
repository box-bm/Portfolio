import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@nextui-org/react";

interface Props {
  content: string;
}

const PolicyContent = ({ content }: Props) => {
  return (
    <ReactMarkdown
      children={content}
      linkTarget="_blank"
      components={{
        a: ({ children, href }) => <Link href={href}>{children}</Link>,
      }}
      remarkPlugins={[remarkGfm]}
    />
  );
};
export default PolicyContent;
