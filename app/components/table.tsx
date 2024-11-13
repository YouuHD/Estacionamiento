import { Button } from "./button"
import { jsPDF } from "jspdf";

function timeCalculate({ time_start, time_end }: { time_start: string, time_end: string }) {
    // Agregar una fecha ficticia "01/01/2000" a la hora para que sea válida
    const start = new Date(`01/01/2000 ${time_start}`);
    const end = new Date(`01/01/2000 ${time_end}`);

    // Verificar si las fechas son válidas
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.error("Fecha inválida", { time_start, time_end });
        return "Fecha inválida";
    }

    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    console.log(hours, minutes);
    return `${hours} horas y ${minutes} minutos`;
}

function generatePDF(data: any) {
    const doc = new jsPDF();
    let y = 10; // Posición vertical para el contenido

    // Título del PDF
    doc.setFont("helvetica", "bold");
    doc.text("Reporte de Vehículos Estacionados", 14, y);
    y += 10;

    // Encabezado de la tabla
    doc.setFont("helvetica", "normal");
    doc.text("Núm de Placa", 14, y);
    doc.text("Tiempo Estacionado", 60, y);
    doc.text("Tipo", 120, y);
    doc.text("Cantidad a Pagar", 160, y);
    y += 10;

    // Datos de la tabla
    data.forEach((dataItem: any) => {
        doc.text(dataItem.placa, 14, y);
        doc.text(timeCalculate({ time_start: dataItem.hora_entrada, time_end: dataItem.hora_salida }), 60, y);
        doc.text(dataItem.tipo, 120, y);
        doc.text(dataItem.cantidad, 160, y);
        y += 10;
    });

    // Guardar el PDF
    doc.save("reporte_vehiculos.pdf");
}

export const Table = ({ title, subtitle , data}: any) => {
    return (
        <div className="bg-white dark:bg-[#3c3c3c] shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-zinc-500 text-md">{subtitle}</p>
            <Button styles="mt-4" onClick={() => generatePDF(data)} >Generar PDF</Button>
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
                        {data.map((data : any) => (
                            <tr key={data.id}>
                                <td>{data.placa}</td>
                                <td>{timeCalculate({ time_start: data.hora_entrada, time_end: data.hora_salida })}</td>
                                <td>{data.tipo}</td>
                                <td>{data.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
}