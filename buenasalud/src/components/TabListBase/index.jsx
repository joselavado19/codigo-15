import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";

export default function TabListBase() {
  return (
    <>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={HandThumbUpIcon}>Location A</Tab>
          <Tab icon={HandThumbDownIcon}>Location B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10">
            <h2>svvvvs</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
             <h2>sas</h2>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
