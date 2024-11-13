interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
    name: string;
    placeholder: string;
    styles?: string;
}

export const Input = ({text , name , placeholder , styles } : InputProps) => {
    return (
        <input className={`border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-md text-sm focus:outline-none dark:bg-[#202020] dark:border-zinc-900 dark:text-gray-300 ${styles}`}
            type={text} name={name} placeholder={placeholder} />
    )
}