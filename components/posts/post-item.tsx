import Image from 'next/image';
import Link from 'next/link';
import dateFormatter from '../../utils/date-formatter';
import classes from './post-item.module.css';

interface PostItemProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, excerpt, image, slug }) => (
  <li className={classes.post}>
    <Link href={`/posts/${slug}`}>
      <a>
        <div className={classes.image}>
          <Image 
            src={`/images/posts/${slug}/${image}`} 
            alt={title} width={300} height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{dateFormatter(date)}</time>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  </li>
);

export default PostItem;