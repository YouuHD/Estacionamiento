import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Form } from "@remix-run/react";
import { FormCard } from "~/components/form";
import { Input } from "~/components/input";
import { Select } from "~/components/select";
import { Card } from "~/components/card";
import { Greeting } from "~/components/Greeting";

export const meta: MetaFunction = () => {
  return [
    { title: "Estacionamiento" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <FormCard title="Agregar Vehiculo" subtitle="Introduce los datos correctamente" 
        children={
        <Form method="post" className="">
          <Input placeholder='Número de placa' name="placa"/>
          <Select name="tipo" label="Tipo de Vehiculo " options={[
            'Oficial', 'Residente', 'No Residentes'
          ]}/>
          <Button type="submit" styles="mt-4">Añadir</Button>
        </Form>}
      />
      

      <section className="grid w-full grid-cols-3 gap-12 p-6">
        <Card title={<Greeting/>} subtitle="Hora actual" />
        <Card title="Vehiculos Estacionados" subtitle="Vehiculos Estacionados Actualmente" />
        <Card title="Vehiculos Totales" subtitle="Cantidad de Autos estacionados en el día" />
        <Card title="Vehiculos Oficiales" subtitle="Vehiculos Oficiales Estacionados" />
        <Card title="Vehiculos Residentes" subtitle="Vehiculos Residentes Estacionados" />
        <Card title="Vehiculos No Residentes" subtitle="Vehiculos No Residentes Estacionados" />
			</section>
    </>
  );
}

