import React from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <button 
        onClick={onClick}
        className="relative w-[119px] h-[48px] bg-[#FF877B] rounded-[32px] text-white font-poppins font-semibold text-[16px] flex items-center justify-center hover:bg-[#D55D51] transition duration-300"
        >
            {label}
        </button>
    );
};

export default Button;