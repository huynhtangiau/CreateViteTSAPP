import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';

export default function FormInputPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/form">Form</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Stack direction={'column'}>
                <Box p="2">
                    <Heading size="md">Chakra App Form Demo</Heading>
                </Box>
                <Flex gap={2} wrap={'wrap'}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <Select placeholder="Select option">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                </Flex>
                <ButtonGroup gap="2">
                    <Button colorScheme="teal" onClick={onOpen}>
                        Sign Up
                    </Button>
                    <Button colorScheme="teal">Log in</Button>
                </ButtonGroup>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Sit nulla est ex deserunt exercitation anim
                            occaecat. Nostrud ullamco deserunt aute id consequat
                            veniam incididunt duis in sint irure nisi. Mollit
                            officia cillum Lorem ullamco minim nostrud elit
                            officia tempor esse quis. Sunt ad dolore quis aute
                            consequat. Magna exercitation reprehenderit magna
                            aute tempor cupidatat consequat elit dolor
                            adipisicing. Mollit dolor eiusmod sunt ex incididunt
                            cillum quis. Velit duis sit officia eiusmod Lorem
                            aliqua enim laboris do dolor eiusmod. Et mollit
                            incididunt nisi consectetur esse laborum eiusmod
                            pariatur proident Lorem eiusmod et. Culpa deserunt
                            nostrud ad veniam.
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        </>
    );
}
