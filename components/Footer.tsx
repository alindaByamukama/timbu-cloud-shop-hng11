import React from 'react';
import Image from 'next/image';
import FooterLink from './FooterLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold mb-4">Link</h3>
          <ul>
          <FooterLink label="Categories" href="#categories" />
          <FooterLink label="New Arrivals" href="#new-arrivals" />
          <FooterLink label="Contact Us" href="#contact-us" />
          <FooterLink label="FAQ" href="#faq" />
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal Information</h3>
          <ul>
          <FooterLink label="Privacy Policy" href="#privacy-policy" />
          <FooterLink label="Terms of Service" href="#terms-of-service" />
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#facebook">
              <Image src="/images/socials/fb-icon.png" alt="Facebook" width={54} height={54} />
            </a>
            <a href="#linkedin">
              <Image src="/images/socials/linkedin-icon.png" alt="LinkedIn" width={54} height={54} />
            </a>
            <a href="#xtwitter">
              <Image src="/images/socials/twitter-icon.png" alt="X (Twitter)" width={54} height={54} />
            </a>
            <a href="#instagram">
              <Image src="/images/socials/instagram-icon.png" alt="Instagram" width={54} height={54} />
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
