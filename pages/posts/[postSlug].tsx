import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles, Post } from '../../utils/posts-util';
import { ParsedUrlQuery } from 'node:querystring';

interface PostDetailsPageProps {
  post: Post;
}

const PostDetailsPage: NextPage<PostDetailsPageProps> = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent {...post}/>
  </>
)

interface PostDetailsQueryParams extends ParsedUrlQuery {
  postSlug: string;
}

export const getStaticProps: GetStaticProps<PostDetailsPageProps, PostDetailsQueryParams> = async ({ params }) => {
  const { postSlug } = params;
  const post = getPostData(postSlug);
  return {
    props: { post },
    revalidate: 600,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsFiles()
    .map(fileName => fileName.replace(/\.md$/, ''))
    .map(postSlug => ({ params: { postSlug } }));
  return {
    paths,
    fallback: false,
  }
}

export default PostDetailsPage;