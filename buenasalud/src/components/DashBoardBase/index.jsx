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
import ChartLineBase from "../ChartLineBase";

export default function DashBoardBase(){
    return(
        <>
        
        <TabGroup className="mt-6">
        <TabList>
          <Tab>Mes Actual</Tab>
          <Tab>Historico de Ventas</Tab>
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
             
                <ChartLineBase/>
              
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

        </>
    )
}