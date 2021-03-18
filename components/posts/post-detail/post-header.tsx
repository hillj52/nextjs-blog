import Image from 'next/image';
import classes from './post-header.module.css';

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, image }) => (
  <header className={classes.header}>
    <h1>{title}</h1>
    <Image src={image} alt={title} width={200} height={150} />
  </header>
);

export default PostHeader;