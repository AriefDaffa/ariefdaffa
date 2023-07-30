import About from '@/src/components/pages/About';
import { getAbout } from '@/src/lib/mdx/about';

const AboutPage = async () => {
  const { content, meta } = await getAbout();

  return <About content={content} meta={meta} />;
};

export default AboutPage;
