import Navigation from './navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
  </>
);

export default Layout;