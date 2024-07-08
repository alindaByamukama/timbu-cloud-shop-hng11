import React from 'react';

interface MenuLinkProps {
  label: string;
  href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="relative w-[137px] h-[40px] bg-transparent text-[#2B2B2B] font-poppins text-[16px] flex items-center justify-center rounded-[32px] hover:bg-[#F0F0F0] transition duration-300"
    >
      {label}
    </a>
  );
};

export default MenuLink;
