import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Table } from "~/components/table";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Reportes del Estacionamiento" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {

    const client = new PrismaClient();
    const dataForm = await client.lastData.findMany();

    console.log(dataForm);
    return {
        dataForm
    }
}



export default function Reportes() {

    const {dataForm} = useLoaderData<typeof loader>()

  return (
    <>
      <Table 
        title="Reporte general" 
        subtitle="Reporte sobre todos los vehiculos que han pasado por el estacionamiento"
        data={dataForm}
        />
    </>
  );
}
