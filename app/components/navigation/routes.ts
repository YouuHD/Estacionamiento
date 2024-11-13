//import { IconName } from "../icon"

type Route = {
    name: string
    path: string
    //icon: IconName
    sub?: Route[]
}

export const routes: Route[] = [
    {
        name: 'Inicio',
        path: '/',
    //    icon: 'home',
    },
    {
        name: 'Vehiculos',
        path: '/vehiculos',
    },
    {
        name: 'Reportes',
        path: '/reportes',
    //    icon: 'cart',
    }

]
