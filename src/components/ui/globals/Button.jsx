"use client"
import Link from "next/link";
import React from "react";

const Button = ({
  size = "md",
  color = "blue",
  children,
  className,
  outline,
  onClick = () => { },
  gradient,
  flex = false,
  roundedFull = false,
  href = false,
  loading=false,
  disabled = false,
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
    red: "border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600 text-white",
    green: "border-green-custom bg-green-custom hover:bg-emerald-400 hover:border-emerald-400 text-white",
    light: "text-blue-500 bg-transportant !border-0",
    gray: "border-gray-400 bg-gray-400 hover:bg-gray-500 text-white",
    white: "text-blue-custom bg-white !border-0 hover:bg-blue-custom hover:text-white",
  };

  const outlineColors = {
    blue: "border-blue-custom hover:bg-blue-custom hover:text-white text-blue-custom",
    red: "border-red-500 hover:bg-red-500 hover:text-white text-red-500",
    green: "border-green-600 bg-green-600 hover:bg-green-700 text-white",
    light: "text-blue-500 bg-transportant !border-0",
    gray: "border-gray-400 bg-gray-400 hover:bg-gray-500 text-white",
  };

  const gradientColors = {
    blue: "bg-blue-custom-gradient border-0 hover:!bg-[#fff] hover:shadow-lg text-white",
    gray: "bg-gradient-to-r from-gray-400 to-gray-600 border-0 hover:shadow-lg text-white",

  };


  if (!disabled) {
    disabled = loading && true;
  }

  const buttonElement = (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={`border ${roundedFull ? 'rounded-full' : 'rounded-xl'} ${disabled && 'opacity-75 cursor-not-allowed'} p-0 items-center duration-300 transition-all ${sizes[size]} ${flex ? 'flex justify-center gap-2 items-center flex-nowrap' : 'grid'} ${gradient ? gradientColors[gradient] : (outline ? outlineColors[color] : colors[color])} ${className}`}
    >
      {
        loading ?
          <div className="flex justify-center items-center w-full gap-1.5">
            <div class="size-2 bg-white duration-400 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
            <div class="size-2 bg-white duration-400 rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
            <div class="size-2 bg-white duration-400 rounded-full animate-bounce" style={{animationDelay: '800ms'}}></div>
          </div>
          :
          children
      }
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
