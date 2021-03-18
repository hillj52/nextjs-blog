import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts, Post } from '../utils/posts-util';

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => (
  <>
    <Head>
      <title>Joe's Blog</title>
      <meta name="description" content="I blog about web development" />
    </Head>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts = getFeaturedPosts();
  return {
    props: { posts },
    revalidate: 3000,
  }
}

export default HomePage;
