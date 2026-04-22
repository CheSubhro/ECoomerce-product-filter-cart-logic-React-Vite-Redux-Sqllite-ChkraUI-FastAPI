
import { Spinner, Center, VStack, Text, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react'; 

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const LoadingSpinner = ({ label = "Loading ProCart..." }) => {
    return (
        <Center h="50vh" w="100%">
            <VStack spacing={6}>
                <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                    <Box
                        position="absolute"
                        w="80px"
                        h="80px"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="orange.300"
                        animation={`${pulse} 2s infinite ease-in-out`}
                    />
                    
                    <Spinner
                        thickness="6px"
                        speed="0.8s"
                        emptyColor="gray.100"
                        color="teal.500"
                        size="xl"
                        w="60px"
                        h="60px"
                    />
                </Box>

                <Text 
                    fontSize="xl" 
                    fontWeight="bold" 
                    bgGradient="linear(to-r, teal.500, orange.500)" 
                    bgClip="text"
                    animation={`${pulse} 2s infinite ease-in-out`}
                >
                    {label}
                </Text>
            </VStack>
        </Center>
    );
};

export default LoadingSpinner;