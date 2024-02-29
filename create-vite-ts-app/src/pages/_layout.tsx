import { Box, Text } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import routers from '../routers';
import Props from '../models/Props';
export function MainLayout({ children }: Props) {
    return (
        <Box
            width={{
                base: '100%',
                sm: '100%', // ~480px. em is a relative unit and is dependant on the font-size.
                md: '100%', // ~768px
                lg: '100%', // ~992px
                xl: '100%', // ~1280px
                '2xl': '100%', // ~1536px
            }}
        >
            {children}
            <Text
                bgGradient="linear(to-tl, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            >
                {' '}
                Welcome to Chakra UI Demo
            </Text>
            <RouterProvider
                router={routers}
                fallbackElement={<p>Loading...</p>}
            />
        </Box>
    );
}
