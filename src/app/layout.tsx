import React,  { ReactNode } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../src/app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;