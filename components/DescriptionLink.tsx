import Link from "next/link";
import React from "react";

interface DescriptionLinkProps {
    label: string;
    href: string;
}

const DescriptionLink: React.FC<DescriptionLinkProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="font-poppins font-medium text-[20px] leading-[32px] text-[#777777] hover:text-[#D55D51] transition duration-300"
    >
      {label}
    </Link>
  );
};

export default DescriptionLink;