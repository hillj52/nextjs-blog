import PostsGrid from '../posts/posts-grid';
import { Post } from '../../utils/posts-util';
import classes from './featured-posts.module.css'

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => (
  <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts}/>
  </section>
);

export default FeaturedPosts;