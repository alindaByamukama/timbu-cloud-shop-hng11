import React from "react";

interface FooterLinkProps {
    label: string;
    href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="relative w-[89px] h-[16px] absolute left-[20px] top-[20px] font-poppins font-normal text-[16px] leading-[16px] text-[rgba(255,255,255,0.8)] hover:text-[#80D0F4] transition duration-300"
    >
      {label}
    </a>
  );
};

export default FooterLink;