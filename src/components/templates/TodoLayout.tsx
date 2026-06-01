import { Container, Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TodoLayoutProps {
    form: ReactNode;
    filters: ReactNode;
    list: ReactNode;
}

export const TodoLayout = ({ form, filters, list }: TodoLayoutProps) => {
    return (
        <Container maxW="md" centerContent py={10}>
            <VStack spacing={6} width="100%">
                <Heading as="h1" size="xl" color="teal.500">
                    Chakra Todo App
                </Heading>
                {form}
                {filters}
                {list}
            </VStack>
        </Container>
    );
};