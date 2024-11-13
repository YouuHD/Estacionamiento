import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Table } from "~/components/table";
import { Card } from "~/components/card";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "Vehiculos Estacionados" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {

    const client = new PrismaClient();
    const dataForm = await client.firstData.findMany();

    console.log(dataForm);
    return {
        dataForm
    }
}

const Eliminar = async (id : any) => {
    const client = new PrismaClient();
    const dataForm = await client.firstData.deleteMany();
    return {
        dataForm
    }
}

export default function Reportes() {

    const {dataForm} = useLoaderData<typeof loader>()

  return (
    <div className="flex  items-center justify-center">
        <section className="grid w-full grid-cols-3 gap-12 p-6">
            {dataForm.map(( data : any) => 
            (

                <Card key={data.id} title={data.placa} subtitle={data.tipo} description={data.hora_entrada} children = {
                    <div><Button>Eliminar</Button></div>
                }/>
                
            ))}
            
	    </section>
    </div>
  );
}