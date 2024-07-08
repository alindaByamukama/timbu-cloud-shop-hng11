import React from "react";

interface DescriptionLinkProps {
    label: string;
    href: string;
}

const DescriptionLink: React.FC<DescriptionLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="font-poppins font-medium text-[20px] leading-[32px] text-[#777777] hover:text-[#D55D51] transition duration-300"
    >
      {label}
    </a>
  );
};

export default DescriptionLink;