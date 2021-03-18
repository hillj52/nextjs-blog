import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import classes from './post-content.module.css';


interface PostContentProps {
  title: string;
  content: string;
  image: string;
  slug: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, content, image, slug }) => {
  
  const customRenderer = {
    paragraphs: (p) => {
      if (p.children[0].nodeName === 'IMG') {
        const img = p.children[0];
        return (
          <div className={classes.image}>
            <Image 
              src={`/images/posts/${slug}/${img.url}`} 
              alt={img.alt} width={600} height={300} 
            />
        </div>);
      }
      return <p>{p.children}</p>
    },
    code: ({ language, value }: { language: string, value: HTMLElement }) => (
      <Prism style={atomDark} language={language} children={value} />
    )
  }
  
  return (
    <article className={classes.content}>
      <PostHeader 
        title={title} 
        image={`/images/posts/${slug}/${image}`} 
      />
      <ReactMarkdown renderers={customRenderer}>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;