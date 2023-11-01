import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { readEspecialidad } from "../../services";
import { useEffect, useState } from "react";

const valueFormatter = (number) =>
  `S/. ${new Intl.NumberFormat("pen").format(number).toString()}`;

  const customTooltip = ({ payload, active }) => {
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
            
              <p className="font-medium text-tremor-content-emphasis">{valueFormatter(category.value)}</p>  
            </div>
          </div>
        ))}
      </div>
    );
  };

export default function BarChartBase() {
  const [rowVentasEspcialidad, setrowVentasEspcialidad] = useState([]);

  const getEspecialidad = async () => {
    const response = await readEspecialidad("rowVentasEspcialidad");
    setrowVentasEspcialidad(response);
  };

  useEffect(() => {
    getEspecialidad();
  }, []);

  const chartdata = rowVentasEspcialidad.map(({especialidad, total}) => {
    return {
      name: especialidad,
      "Ventas por Especialidad": total,
     
    };
  });

  return (
    <Card>
      <Title>Ventas por Especialidad (2023)</Title>
      <Subtitle>
        Lista de todas las especialidad que realizaron ventas.
      </Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Ventas por Especialidad"]}
        colors={["blue"]}
        valueFormatter={valueFormatter}
        yAxisWidth={80}
        maxValue={60000}
        customTooltip={customTooltip}
      />
    </Card>
  );
}
