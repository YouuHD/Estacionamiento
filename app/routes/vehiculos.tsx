import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Table } from "~/components/table";
import { Card } from "~/components/card";
import { PrismaClient } from "@prisma/client";
import { data, useLoaderData } from "@remix-run/react";
import { Input } from "~/components/input";
import { useEffect, useState } from "react";
import { json, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { Form } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "Vehiculos Estacionados" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {

    const client = new PrismaClient();
    const dataForm = await client.firstData.findMany();

    return {
        dataForm
    }
}

export const action: ActionFunction = async ({ request }) => {
  const client = new PrismaClient();
  const formData = await request.formData();
  
  const id = formData.get("id");
  const placa = formData.get("placa");
  let cantidad_pagar = formData.get("cantidad") as string;
  const hora_entrada = formData.get("hora_entrada") as string
  const hora_salida = new Date().toLocaleTimeString()


  if (typeof id === "string") {
    await client.$transaction(async (prisma) => {
      await prisma.firstData.delete({
        where: { id },
      });
      
  
      await prisma.lastData.create({
        data: {
          placa: placa as string,
          tipo: formData.get("tipo") as string,
          hora_entrada: hora_entrada,
          hora_salida: hora_salida,
          cantidad: cantidad_pagar,
          estado: "Inactivo",
          
        },
      });
    });
  }
  

  return redirect("/vehiculos");
};


export default function Reportes() {

    const {dataForm} = useLoaderData<typeof loader>()
    const [searchTerm, setSearchTerm] = useState("");
    

    const calculateAmountToPay = (horaEntrada: string, tipo: string) => {
      const currentDate = new Date();
      const [hour, minute] = horaEntrada.split(":").map((str) => parseInt(str, 10));
      const entradaDate = new Date(currentDate.setHours(hour, minute, 0, 0));

      const salidaDate = new Date(); // Fecha actual

      const tiempoEstacionadoMs = salidaDate.getTime() - entradaDate.getTime();
      const tiempoEstacionadoMinutos = tiempoEstacionadoMs / (1000 * 60); // minutos

  
      const tarifas = {
        oficial: 0,
        residente: 1,
        visitante: 3
      };
  
      let cantidadPagar = 0;
      if (tipo === "Residente") {
        cantidadPagar = tiempoEstacionadoMinutos * tarifas.residente;
      } else if (tipo === "No Residentes") {
        cantidadPagar = tiempoEstacionadoMinutos * tarifas.visitante;
      } else if (tipo === "Oficial") {
        cantidadPagar = tarifas.oficial; // Gratis para "Oficial"
      }
  
      return cantidadPagar;
    };

    const filteredData = dataForm.filter((data: any) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        data.placa.toLowerCase().includes(lowerCaseSearchTerm) ||
        data.tipo.toLowerCase().includes(lowerCaseSearchTerm) ||
        data.hora_entrada.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

  return (
    <div className="flex flex-col p-6">
    
        <Input
            placeholder="Buscar"
            name="buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado al escribir
          />
        <section className="grid w-full grid-cols-3 gap-12 pt-6">
            {filteredData.map(( data : any) => {
              const cantidadPagar = calculateAmountToPay(data.hora_entrada, data.tipo);

          return(
                <Card key={data.id} title={data.placa} subtitle={data.tipo} description={data.hora_entrada} 
                children={
                  <Form method="post">
                    <input type="hidden" name="id" value={data.id} />
                    <input type="hidden" name="placa" value={data.placa} />
                    <input type="hidden" name="hora_entrada" value={data.hora_entrada} />
                    <input type="hidden" name="tipo" value={data.tipo} />
                    <input type="hidden" name="cantidad" value={cantidadPagar.toFixed(2)} />
                    <div className="flex">
                      hora de entrada: {data.hora_entrada}<br/>
                      cantidad a pagar: {cantidadPagar.toFixed(2)}
                    </div>
                    <br/>
                    <Button type="submit">Eliminar</Button>
                  </Form>
                }/>
                
            )})}

            
	    </section>
    </div>
  );
}