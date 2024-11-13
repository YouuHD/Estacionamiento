import { Button } from "./button"

export const Table = ({ children, title, subtitle }: any) => {
    return (
        <div className="bg-white dark:bg-[#3c3c3c] shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-zinc-500 text-md">{subtitle}</p>
            <Button styles="mt-4" >Generar PDF</Button>
            <div className="mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <td>Núm de Placa</td>
                            <td>Tiempo Estacionado</td>
                            <td>Tipo</td>
                            <td>Cantidad a Pagar</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                        </tr>
                        <tr>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                        </tr>
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
}