import { Formik, Field } from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
} from '@chakra-ui/react';
import LoginModel from '../../models/LoginModel';
import onLogin from './login';

export default function FormikLoginPage() {
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik initialValues={new LoginModel()} onSubmit={onLogin}>
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl
                                    isInvalid={!!errors.email && touched.email}
                                >
                                    <FormLabel htmlFor="email">
                                        Email Address
                                    </FormLabel>
                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="filled"
                                        validate={(value: string) => {
                                            let error;

                                            if (value == '') {
                                                error =
                                                    'Email Address is required';
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.email}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        !!errors.password && touched.password
                                    }
                                >
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <Field
                                        as={Input}
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="filled"
                                        validate={(value: string) => {
                                            let error;

                                            if (value.length < 6) {
                                                error =
                                                    'Password must contain at least 6 characters';
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.password}
                                    </FormErrorMessage>
                                </FormControl>
                                <Field
                                    as={Checkbox}
                                    id="rememberMe"
                                    name="rememberMe"
                                    colorScheme="purple"
                                >
                                    Remember me?
                                </Field>
                                <Button
                                    type="submit"
                                    colorScheme="purple"
                                    width="full"
                                >
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}
