import { Button } from "./button";
export const FormCard = ({ children, title, subtitle } : any) => {
    
    return (
        <>
            <Button styles="mt-4" >Agregar Vehiculo</Button>
            <div className="bg-white dark:bg-[#3c3c3c] shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-zinc-500 text-md">{subtitle}</p>
                <div className="mt-4">{children}</div>
            </div>
        </>
        
    );
}

