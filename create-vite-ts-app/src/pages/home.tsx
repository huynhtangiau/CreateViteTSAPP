import { Box, Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import SelectComponent from '../components/Select.tsx';
import TablistComponent from '../components/tablist.tsx';
import { useState } from 'react';
import AlertComponent from '../components/Alert.tsx';
import TablePaginationComponent from '../components/TablePagination.tsx';

export default function HomePage() {
    const [count, setCount] = useState(0);
    function btnOnClick(): void {
        setCount((count) => count + 1);
    }
    return (
        <>
            <Stack direction={'column'} spacing={2} borderColor={'gray.200'}>
                <Text> Count is {count}</Text>

                <Button borderLeftRadius="0" onClick={btnOnClick}>
                    Click to Count
                </Button>
                <SelectComponent width={200}></SelectComponent>
                <SimpleGrid columns={2} spacing={10}>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                </SimpleGrid>
                <AlertComponent></AlertComponent>
                <TablistComponent></TablistComponent>
                <TablePaginationComponent></TablePaginationComponent>
            </Stack>
        </>
    );
}
