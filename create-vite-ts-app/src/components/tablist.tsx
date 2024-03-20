import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    SimpleGrid,
    Box,
    Kbd,
    Stack,
    Text,
} from '@chakra-ui/react';
import AlertComponent from './Alert';
import SelectComponent from './Select';
import TablePaginationComponent from './TablePagination';
import FormComponent from './Form';
export default function TablistComponent() {
    return (
        <>
            <Tabs variant="soft-rounded" isFitted colorScheme="green">
                <TabList>
                    <Tab>Simple Component</Tab>
                    <Tab>SimpleGrid</Tab>
                    <Tab>Alert</Tab>
                    <Tab>Form</Tab>
                    <Tab>Pagination</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack direction="column">
                            <SelectComponent width={200}></SelectComponent>
                            <Stack h={5} w={100} direction={'row'}>
                                <Kbd>shift</Kbd> <Text>+</Text> <Kbd>H</Kbd>
                            </Stack>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={2} spacing={10}>
                            <Box bg="tomato" height="80px"></Box>
                            <Box bg="tomato" height="80px"></Box>
                            <Box bg="tomato" height="80px"></Box>
                            <Box bg="tomato" height="80px"></Box>
                            <Box bg="tomato" height="80px"></Box>
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <AlertComponent></AlertComponent>
                    </TabPanel>
                    <TabPanel>
                        <FormComponent></FormComponent>
                    </TabPanel>
                    <TabPanel>
                        <TablePaginationComponent></TablePaginationComponent>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
