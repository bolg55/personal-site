import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

interface MarkdownProps {
  markdown: string;
}

const Markdown: FC<MarkdownProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeCodeTitles, rehypePrism]}
      className='prose prose-xl sm:prose-base lg:prose-lg dark:prose-invert prose-a:text-indigo-600 prose-a:no-underline'
    >
      {markdown}
    </ReactMarkdown>
  );
};
export default Markdown;
