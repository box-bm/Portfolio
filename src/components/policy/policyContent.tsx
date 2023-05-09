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
      components={{
        a: ({ children, node, ...props }) => (
          <a {...props} className={styles.link}>
            {children}
          </a>
        ),
      }}
      remarkPlugins={[remarkGfm]}
    />
  );
};
export default PolicyContent;
