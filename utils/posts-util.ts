import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  content: string;
}

interface MDMetaData {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}

const postsDir = path.join(process.cwd(), 'content/posts');

export const getPostsFiles = () => fs.readdirSync(postsDir);

export const getPostData: (postIdentifier: string) => Post = (
  postIdentifier: string
) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const fileContent = fs.readFileSync(
    path.join(postsDir, `${postSlug}.md`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...(data as MDMetaData),
    content,
  };
  return postData;
};

export const getAllPosts: () => Post[] = () => {
  const postFiles = getPostsFiles();
  return postFiles
    .map((postFileName) => getPostData(postFileName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};

export const getFeaturedPosts: () => Post[] = () =>
  getAllPosts().filter(({ isFeatured }) => isFeatured);
