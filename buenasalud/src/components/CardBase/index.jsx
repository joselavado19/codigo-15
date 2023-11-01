import {
  BadgeDelta,
  Card,
  Grid,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import { useEffect, useState } from "react";

import { read } from "../../services";


const valueFormatter = (number) =>
  `S/. ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function CardBase() {
  const [rowVentasDia, setrowVentasDia] = useState([]);

  const getKpis = async () => {
    const response = await read("rowVentasDia");
    setrowVentasDia(response);
  };

  useEffect(() => {
    getKpis();
  }, []);

  return (
    <Grid numItemsMd={2} numItemsLg={4} className="gap-6">
      {rowVentasDia.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{valueFormatter(item.metric)}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text className="truncate">{`${item.progress}% (${valueFormatter(item.metric)})`}</Text>
            <Text className="truncate">{valueFormatter(item.target)}</Text>
          </Flex>
          <ProgressBar value={item.progress} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}
