import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { Post, getAllPosts } from '../../utils/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ posts }) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="A list of all programming related tutorials" />
    </Head>
    <AllPosts posts={posts} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { 
    props: { posts },
    revalidate: 3000,
  }
}

export default AllPostsPage;