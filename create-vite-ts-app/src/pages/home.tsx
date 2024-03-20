import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    Stack,
    Text,
} from '@chakra-ui/react';
import TablistComponent from '../components/tablist.tsx';
import { useState } from 'react';

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
                <Box position="relative" padding="10">
                    <Divider />
                    <AbsoluteCenter bg="white" px="4">
                        <Text fontSize="2xl" as="b">
                            Components{' '}
                        </Text>
                    </AbsoluteCenter>
                </Box>
                <TablistComponent></TablistComponent>
            </Stack>
        </>
    );
}
