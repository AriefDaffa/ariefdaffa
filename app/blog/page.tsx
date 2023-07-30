import PageTitle from '@/src/components/UI/PageTitle';
import Blog from '@/src/components/pages/Blog';
import { getAllBlog } from '@/src/lib/mdx/blog';

const BlogPage = async () => {
  const blogs = await getAllBlog();

  return (
    <PageTitle
      title="Blog"
      subTitle="Journey of Reflection: Unveiling My Personal World"
    >
      <Blog blogs={blogs} />
    </PageTitle>
  );
};

export default BlogPage;
