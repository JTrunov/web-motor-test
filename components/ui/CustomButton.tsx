import React, { MouseEventHandler, ReactNode } from "react";

type Props = {
  handleClick?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
  className?: string;
};

const CustomButton = ({ handleClick, children, className }: Props) => {
  return (
    <button
      className={`flex items-center justify-center bg-button-bg hover:bg-button-hover text-button-text rounded-[5px] ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
