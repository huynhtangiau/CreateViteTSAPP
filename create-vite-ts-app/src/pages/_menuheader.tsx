import { Link, Stack } from '@chakra-ui/react';
export default function MenuHeaderComponent() {
    return (
        <>
            <Stack direction={'row'} spacing={3}>
                <Link color="teal.500" href="/">
                    Home
                </Link>
                <Link color="teal.500" href="/form">
                    Form
                </Link>
            </Stack>
        </>
    );
}
