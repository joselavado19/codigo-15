import { Card,
    Grid,
    Title,
    Text,
    Tab,
    TabList,
    TabGroup,
    TabPanel,
    TabPanels,} from "@tremor/react";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import CardBase from "../CardBase";
import BarChartBase from "../BarChartBase";

export default function DashBoardBase(){
    return(
        <>
        
        <TabGroup className="mt-6">
        <TabList>
          <Tab>Indicadores</Tab>
          <Tab>Detalle</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           
            
              <CardBase/>
            
          
            <div className="mt-6">
              
                <BarChartBase/>
            
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

        </>
    )
}