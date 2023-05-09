import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./policy.module.css";

interface Props {
  content: string;
}

const PolicyContent = ({ content }: Props) => {
  return (
    <ReactMarkdown
      children={content}
      linkTarget="_blank"
      components={{
        a: ({ children, node, href, ...props }) => (
          <a className={styles.link} href={href} {...props}>
            {children}
          </a>
        ),
      }}
      // remarkPlugins={[remarkGfm]}
    />
  );
};
export default PolicyContent;
