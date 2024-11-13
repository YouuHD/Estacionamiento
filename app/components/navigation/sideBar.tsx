import { useLocation } from 'react-router-dom';
import LinkTo from '../link';
import { routes } from './routes'
import { Fragment } from 'react/jsx-runtime';

export default function SideBar(){
    
    const location = useLocation();
    
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <aside className='flex flex-col items center bg-[#fafbfb] border-r bg-gray-100/40  lg:block dark:bg-[#252525] dark:border-zinc-900'>
            <div className='sticky top-0 z-50 flex h-[60px] items-center border-b px-4 bg-[#fafbfb] dark:bg-[#202020] dark:border-zinc-900'>
                <div className='flex items-center gap-2 font-semibold dark:text-gray-800'>
                    <LinkTo text='ACME Parking' link='/' style='dark:bg-[#202020]'/>
                </div>
            </div>
            <ul className='sticky top-16 z-40 flex flex-col px-4 pt-4 text-sm font-medium'>
                {routes.map((route , index) => (
                    <Fragment key={route.path}>
                        <li className='flex items-center gap-3'>
                            <LinkTo text={route.name} link={route.path} style={isActive(route.path) ? 'text-gray-900 bg-gray-100 dark:bg-[#3c3c3c] dark:text-gray-50 dark:hover:text-gray-50' : 'dark:text-gray-300'}/>
                        </li>
                    </Fragment>
                ))}
            </ul>
            
        </aside>
    )
}