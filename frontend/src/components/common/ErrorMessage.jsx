
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const ErrorMessage = ({ message = "Something went wrong. Please try again." }) => {
    return (
        <Box my={4} w="100%">
            <Alert status="error" borderRadius="md">
                <AlertIcon />
                <AlertTitle mr={2}>Error!</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    );
};

export default ErrorMessage;