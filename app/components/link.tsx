import {Link} from "@remix-run/react"

export default function LinkTo({text , link, style} : {text : string , link : string, style? : string}) {
    const defaultStyle = `flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50 dark:text-white dark:bg-[#252525] dark:hover:bg-[#3c3c3c] ${style}`
    return (
        <Link to={link}
            className={defaultStyle}
        >
            {text}
        </Link>
    )
}