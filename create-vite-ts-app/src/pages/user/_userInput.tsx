import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Stack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { UserInfoModel } from '../../models/UserInfoModel';
import { onRegister } from './user';
export default function UserInputPage() {
    return (
        <>
            <Stack direction={'column'}>
                <Box p="2">
                    <Heading size="md">Resigter</Heading>
                </Box>
                <Formik
                    initialValues={new UserInfoModel()}
                    onSubmit={onRegister}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Flex gap={2} wrap={'wrap'}>
                                <FormControl
                                    isInvalid={
                                        !!props.errors.Name &&
                                        props.touched.Name
                                    }
                                >
                                    <FormLabel>Name *</FormLabel>
                                    <Field
                                        as={Input}
                                        name="Name"
                                        id="Name"
                                        type="text"
                                        variant="flushed"
                                    />
                                    <FormErrorMessage>
                                        {props.errors.Name}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <Select
                                        name="Gender"
                                        placeholder="Select option"
                                        width="100%"
                                        onChange={props.handleChange}
                                        value={props.values.Gender}
                                    >
                                        <option value="">
                                            Select an option
                                        </option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Birthday</FormLabel>
                                    <Field
                                        as={Input}
                                        name="Birthday"
                                        placeholder="Select Date and Time"
                                        size="md"
                                        type="datetime-local"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <Field
                                        as={Input}
                                        name="Address"
                                        type="text"
                                    />
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        !!props.errors.Phone &&
                                        props.touched.Phone
                                    }
                                >
                                    <FormLabel>Phone</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon>+84</InputLeftAddon>
                                        <Field
                                            as={Input}
                                            type="tel"
                                            name="Phone"
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {props.errors.Phone}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        !!props.errors.Email &&
                                        props.touched.Email
                                    }
                                >
                                    <FormLabel>Email address</FormLabel>
                                    <Field
                                        as={Input}
                                        name="Email"
                                        type="text"
                                        id="Email"
                                    />
                                    <FormErrorMessage>
                                        {props.errors.Email}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <ButtonGroup gap="2" mt={2}>
                                <Button colorScheme="teal" type="submit">
                                    Register
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    variant="outline"
                                    type="reset"
                                    onClick={() => props.resetForm()}
                                >
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </form>
                    )}
                </Formik>
            </Stack>
        </>
    );
}
