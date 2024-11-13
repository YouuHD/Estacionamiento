import { useLocation } from "@remix-run/react";

export default function Header() {
    const location = useLocation();
    
    type PagePaths = '/' | '/vehiculos' |'/reportes';

    type PageNames = 'Inicio' | 'Vehiculos' | 'Reportes';
    
    const pageName: Record<PagePaths, PageNames>
    = {
        '/': 'Inicio',
        '/vehiculos': 'Vehiculos',
        '/reportes': 'Reportes',
    };

    const currentPath  = location.pathname as PagePaths;

    const currentPageName = pageName[currentPath] || '404';

    return (
        <header className="sticky top-0 z-50 flex h-14 lg:h-[60px] min-h-[60px] items-center justify-between gap-2 border-b  bg-[#fafbfb] px-6 dark:bg-[#202020] dark:border-zinc-900">

            <div className="flex justify-between items-center gap-2">
                
                <h1 className="text-lg font-semibold text-gray-800 md:text-2x1 dark:text-white">{currentPageName}</h1>
            </div>
            
            <div className="bg-zinc-950 dark:bg-gray-100 rounded-full p-4">
                
            </div>
        </header>
    )
}