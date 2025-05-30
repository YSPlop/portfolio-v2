import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { MDXWrapper } from './MDXWrapper';

interface MDXProps {
  content: string;
}

export async function MDX({ content }: MDXProps) {
  // Server-side serialize the content
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
    },
  });
  
  // Return a client component with the serialized content
  return <MDXWrapper source={mdxSource} />;
} 