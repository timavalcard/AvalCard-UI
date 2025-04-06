import Link from "next/link";
import React from "react";

const Button = ({
  size = "md",
  color = "blue",
  children,
  className,
  outline,
  gradient,
  flex = false,
  roundedFull = false,
  href = false,
  ...rest
}) => {
  const sizes = {
    sm: "h-[2rem] w-[8rem] text-[.875rem]",
    'md': "h-[3.125rem] min-w-[9.5rem] w-[9.5rem] text-[1rem]",
    lg: "h-[3.125rem] w-56 text-[1rem]",
    xl: "h-[3.6rem] w-full min-w-[18.125rem] max-w-[18.125rem] text-[1rem]",
    "2xl": "h-[3.125rem] w-full max-w-[23.125rem] text-[1rem]",
    full: "w-full h-[3.125rem] text-[1rem]",
    auto: "h-[3.125rem] !w-auto px-5",
  };

  const colors = {
    blue: "border-blue-custom bg-blue-custom hover:bg-blue-700 hover:border-blue-700 text-white",
    red: "border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white",
    green: "border-green-light bg-green-light hover:bg-emerald-400 hover:border-emerald-400 text-white",
    light: "text-blue-500 bg-transportant !border-0",
    gray: "border-gray-400 bg-gray-400 hover:bg-gray-500 text-white",
    white: "text-blue-custom bg-white !border-0 hover:bg-blue-custom hover:text-white",
  };

  const outlineColors = {
    blue: "border-blue-custom hover:bg-blue-custom hover:text-white text-blue-custom",
    red: "border-red-600 bg-red-600 hover:bg-red-700 text-white",
    green: "border-green-600 bg-green-600 hover:bg-green-700 text-white",
    light: "text-blue-500 bg-transportant !border-0",
    gray: "border-gray-400 bg-gray-400 hover:bg-gray-500 text-white",
  };
  
  const gradientColors = {
    blue: "bg-blue-custom-gradient hover:border-blue-custom hover:!bg-[#fff] hover:!font-black text-white",
  };

  const buttonElement = (
    <button
      {...rest}
      className={`border ${roundedFull ? 'rounded-full' : 'rounded-lg'} p-0 items-center duration-300 transition-all ${sizes[size]} ${flex ? 'flex justify-center gap-2 items-center' : 'grid'} ${gradient ? gradientColors[gradient] : (outline ? outlineColors[color] : colors[color])} ${className}`}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
};

export default Button;
