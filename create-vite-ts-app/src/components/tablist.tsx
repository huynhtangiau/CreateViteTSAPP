import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
export default function TablistComponent() {
    return (
        <>
            <Tabs variant="enclosed">
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
