import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
  return (
    <Link className="font-poppins font-normal text-[16px] leading-[16px] text-[rgba(255,255,255,0.8)] hover:text-[#80D0F4] transition duration-300" href={href}>
      {label}
    </Link>
  );
};

export default FooterLink;
