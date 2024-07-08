import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
  return (
    <li className="mb-2">
      <Link href={href} passHref legacyBehavior>
        <a className="hover:underline">{label}</a>
      </Link>
    </li>
  );
};

export default FooterLink;
