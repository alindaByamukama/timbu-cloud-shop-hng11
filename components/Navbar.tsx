import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MenuLink from './MenuLink';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="VistaMart" width={150} height={40} className="mr-3" />
          <span className="text-2xl font-bold">VistaMart</span>
        </div>
        <ul className="flex space-x-6 text-lg">
          <div className="ml-10 space-x-4">
            <MenuLink label="Categories" href="#categories" />
            <MenuLink label="New Arrivals" href="#new-arrivals" />
            <MenuLink label="Contact Us" href="#contact-us" />
          </div>
        </ul>
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
          <input type="text" placeholder="Search Product" className="bg-transparent outline-none" />
          <button className="ml-2">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="flex items-center space-x-4 ml-6">
          <Link href="#account" passHref>
            <a className="flex items-center hover:text-primary">
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-1">Account</span>
            </a>
          </Link>
          <Link href="#cart" passHref>
            <a className="hover:text-primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
