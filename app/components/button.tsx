import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: string;
    onClick?: () => void;
}
export const Button = ({ children , styles , onClick} : ButtonProps) => {

    const defaultStyles = `bg-zinc-950 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded-md dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-zinc-950 ${styles}`;

    return (
        <button className={defaultStyles} onClick={onClick}>{children}</button>
    )
}