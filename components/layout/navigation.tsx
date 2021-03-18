import Link from 'next/link';
import Logo from './logo';
import classes from './navigation.module.css';

const Navigation: React.FC = () => (
  <header className={classes.header}>
    <Link href="/">
      <a><Logo /></a>
    </Link>
    <nav>
      <ul>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;