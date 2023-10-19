import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Topico",
    "Ventas por Especialidades": 2488,
    "Ventas por Mes": 1508,
  },
  {
    name: "Dermatologia",
    "Ventas por Especialidades": 1445,
    "Ventas por Mes": 1808,
  },
  {
    name: "Cardiologia",
    "Ventas por Especialidades": 743,
    "Ventas por Mes": 408,
  },
];

const valueFormatter = (number) => `S/. ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function BarChartBase() {
  return (
   
      <Card>
        <Title>Number of species threatened with extinction (2021)</Title>
        <Subtitle>
          The IUCN Red List has assessed only a small share of the total known
          species in the world.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["Ventas por Especialidades", "Ventas por Mes"]}
          colors={["blue"]}
          valueFormatter={valueFormatter}
          yAxisWidth={54}
        />
      </Card>
    
  );
}
