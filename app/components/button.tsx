import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    
    children: React.ReactNode;
    styles?: string;
}
export const Button = ({ children , styles } : ButtonProps) => {

    const defaultStyles = `bg-zinc-950 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded-md dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-zinc-950 ${styles}`;

    const Variant = {
        default: '',
        secondary: '',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
    }

    const Size = {
        small: 'h-9 px-6 text-sm py-2',
        medium: 'h-10 px-8 text-base',
        large: 'h-11 px-8 text-xl',
        bigger: 'h-[58px] px-[38px] text-xl',
    }
    return (
        <button className={defaultStyles}>{children}</button>
    )
}