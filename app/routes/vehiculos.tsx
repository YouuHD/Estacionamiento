import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Table } from "~/components/table";
import { Card } from "~/components/card";
export const meta: MetaFunction = () => {
  return [
    { title: "Vehiculos Estacionados" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Reportes() {
  return (
    <div className="flex  items-center justify-center">
        <section className="grid w-full grid-cols-3 gap-12 p-6">
            <Card title="Placa" subtitle="DSDSDSD" />
            <Card title="Placa" subtitle="DSDSDSD" />
            <Card title="Placa" subtitle="DSDSDSD" />
            <Card title="Placa" subtitle="DSDSDSD" />
            <Card title="Placa" subtitle="DSDSDSD" />
            <Card title="Placa" subtitle="DSDSDSD" />
	    </section>
    </div>
  );
}