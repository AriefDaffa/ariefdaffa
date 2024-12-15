import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeFormat from 'rehype-format';
import remarkParse from 'remark-parse';
import rehypeSanitize from 'rehype-sanitize';
import { remark } from 'remark';

export const renderMd = async (md: string) => {
  const result = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(md);
  return result;
};
