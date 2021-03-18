import Image from 'next/image';
import classes from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/goku.jpg" 
          alt="An image showing Joe" 
          width={300} height={300} 
        />
      </div>
      <h1>Hi, I'm Joe</h1>
      <p>I blog about web development</p>
    </section>
  )
}

export default Hero;