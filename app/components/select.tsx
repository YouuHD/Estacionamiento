interface SelectProps {
    name: string;
    options: string[];
    label: string;
}

export const Select = ({ name, options, label }: SelectProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm dark:text-gray-300 mt-4">{label}</label>
            <select name={name} id={name} className="border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-md text-sm focus:outline-none dark:bg-[#202020] dark:border-zinc-900 dark:text-gray-300">
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}