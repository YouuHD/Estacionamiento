import { type MetaFunction , type ActionFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Form } from "@remix-run/react";
import { FormCard } from "~/components/form";
import { Input } from "~/components/input";
import { Select } from "~/components/select";
import { Card } from "~/components/card";
import { Greeting } from "~/components/Greeting";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Estacionamiento" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();

    const placa = formData.get('placa');
    const tipo = formData.get('tipo');
    const hora_entrada = new Date().toLocaleTimeString();
    const estado = "Activo";

    console.log(formData.get('placa'));
    console.log(formData.get('tipo'));
    console.log(hora_entrada);
    console.log(estado);

    //Validación por si no llega nada
    if(!placa || !tipo ) throw new Error("Entry data")

    const client = new PrismaClient();

    const vehiculo = await client.firstData.create({
      data: {
        placa: placa as string,
        tipo: tipo as string,
        hora_entrada: hora_entrada as string,
        estado: estado as string,
      },
    });

    const registro = await client.secondData.create({
      data: {
        placa: placa as string,
        tipo: tipo as string,
        estado: estado as string
      },
    });

    return {
      vehiculo,
      registro
    }
}

export const loader = async () => {

  const client = new PrismaClient();
  const dataForm = await client.firstData.findMany();
  const secondData = await client.secondData.findMany();
  const lastData = await client.lastData.findMany();

  return {
      dataForm,
      secondData,
      lastData
  }
}

export default function Index() {
  const hora_actual = new Date().toLocaleTimeString();
  
  const {dataForm, lastData , secondData } = useLoaderData<typeof loader>()

  const autos_estacionados = dataForm.length;
  const autos_totales = secondData.length;
  const autos_oficiales = dataForm.filter((data) => data.tipo === "Oficial").length;
  const autos_residentes = dataForm.filter((data) => data.tipo === "Residente").length;
  const autos_no_residentes = dataForm.filter((data) => data.tipo === "No Residentes").length;

  return (
    <>
      <FormCard title="Agregar Vehiculo" subtitle="Introduce los datos correctamente" 
        children={
        <Form method="post" >
          <Input placeholder='Número de placa' name="placa" styles="w-full"/>
          <Select name="tipo" label="Tipo de Vehiculo " options={[
            'Oficial', 'Residente', 'No Residentes'
          ]}/>
          <Button type="submit" styles="mt-4">Añadir</Button>
        </Form>}
      />
      

      <section className="grid w-full grid-cols-3 gap-12 p-6">
        <Card title={<Greeting/>} subtitle={`Hora actual: ${hora_actual}`} />
        <Card title="Vehiculos Estacionados" subtitle="Vehiculos Estacionados Actualmente" children={<div>{autos_estacionados}</div>}/>
        <Card title="Vehiculos Totales" subtitle="Cantidad de Autos totales estacionados" children={<div>{autos_totales}</div>}/>
        <Card title="Vehiculos Oficiales" subtitle="Vehiculos Oficiales Estacionados" children={<div>{autos_oficiales}</div>} />
        <Card title="Vehiculos Residentes" subtitle="Vehiculos Residentes Estacionados"  children={<div>{autos_residentes}</div>}/>
        <Card title="Vehiculos No Residentes" subtitle="Vehiculos No Residentes Estacionados"  children={<div>{autos_no_residentes}</div>}/>
			</section>
    </>
  );
}

