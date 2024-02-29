import { Link, Stack } from '@chakra-ui/react';
export default function MenuHeaderComponent() {
    return (
        <>
            <Stack direction={'row'} spacing={3}>
                <Link color="teal.500" href="/">
                    Home
                </Link>
                <Link color="teal.500" href="/user">
                    User
                </Link>
                <Link color="teal.500" href="/login">
                    Login
                </Link>
            </Stack>
        </>
    );
}
