
import { Card, LineChart, Title } from "@tremor/react";
import { readVentasMeses } from "../../services";
import { useEffect, useState } from "react";

const valueFormatter = (number) => `S/. ${new Intl.NumberFormat("pen").format(number).toString()}`;

export default function ChartLineBase() {

    const [ventasMes, setVentasMes] = useState([]);

    const getVentasMes = async () => {
      const response = await readVentasMeses();
      setVentasMes(response);
    };
  
    useEffect(() => {
        getVentasMes();
    }, []);
  
    const chartdata = ventasMes.map(({periodo, total}) => {
      return {
        year: periodo,
        "Ventas por Mes": total,
       
      };
    });


    return (
        <Card>
            <Title>Ventas por Mes (2022 -2023)</Title>
            <LineChart
                className="mt-6"
                data={chartdata}
                index="year"
                categories={["Ventas por Mes"]}
                colors={["emerald"]}
                valueFormatter={valueFormatter}
                yAxisWidth={80}
            />
        </Card>
    )
}