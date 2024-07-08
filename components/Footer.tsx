import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold mb-4">Link</h3>
          <ul>
            <li className="mb-2"><a href="#categories">Categories</a></li>
            <li className="mb-2"><a href="#new-arrivals">New Arrivals</a></li>
            <li className="mb-2"><a href="#contact-us">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal Information</h3>
          <ul>
            <li className="mb-2"><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#facebook">
              <Image src="/images/fb-icon.png" alt="Facebook" width={54} height={54} />
            </a>
            <a href="#linkedin">
              <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={54} height={54} />
            </a>
            <a href="#xtwitter">
              <Image src="/images/twitter-icon.png" alt="X (Twitter)" width={54} height={54} />
            </a>
            <a href="#instagram">
              <Image src="/images/instagram-icon.png" alt="Instagram" width={54} height={54} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter to get latest news</p>
          <form className="flex">
            <input type="email" placeholder="Enter email address" className="p-2 rounded-l-full outline-none"/>
            <button type="submit" className="bg-accent text-white p-2 rounded-r-full">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p>© 2024 VistaMart, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
