import React, {MouseEventHandler} from 'react';

type Props = {
  className?: string,
  type?: "button" | "submit" | "reset" | undefined,
  variant?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  children?: React.ReactNode
}

const Button = ({className, children, type = "button", variant = "primary", onClick, disabled = false} : Props) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === "primary" ?
          `bg-primary rounded-xl h-[46px] flex justify-center items-center mx-auto px-2 text-white font-extrabold w-full max-w-[320px] outline outline-[1px] outline-primary md:hover:bg-transparent md:hover:text-primary transition transition-color duration-[.2s] disabled:bg-[#AEB1B4] disabled:outline-[#AEB1B4] disabled:hover:text-white disabled:hover:bg-[#AEB1B4] ${className}`
          :
          `bg-white outline-[#ddf8f9] rounded-xl h-[46px] flex justify-center items-center mx-auto px-2  font-extrabold w-full max-w-[320px] outline outline-[1px] md:hover:outline-primary md:hover:bg-transparent md:hover:text-primary transition transition-color duration-[.2s] disabled:text-[#AEB1B4] disabled:outline-[#AEB1B4] ${className}`
      }
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
