import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/button";
import LinkTo from "~/components/link";
import { Table } from "~/components/table";

export const meta: MetaFunction = () => {
  return [
    { title: "Reportes del Estacionamiento" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Reportes() {
  return (
    <>
      <Table title="Reporte general" subtitle="Reporte sobre todos los vehiculos agregados"/>
    </>
  );
}
