interface InputProps {
    text?: string;
    name: string;
    placeholder: string;
}

export const Input = ({text , name , placeholder } : InputProps) => {
    return (
        <input className="border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-md text-sm focus:outline-none dark:bg-[#202020] dark:border-zinc-900 dark:text-gray-300"
            type={text} name={name} placeholder={placeholder} />
    )
}