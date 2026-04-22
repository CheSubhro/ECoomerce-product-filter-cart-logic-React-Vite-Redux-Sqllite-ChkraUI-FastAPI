
import React from 'react';
import { Box, Flex, Text, Button, Badge, HStack, Spacer, Container,useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; 
import CartDrawer from '../../features/cart/CartDrawer';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cartItems } = useSelector((state) => state.cart);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Box 
                bgGradient="linear(to-r, teal.500, orange.500)" 
                color="white" 
                px={4} 
                py={3} 
                position="sticky" 
                top="0" 
                zIndex="1000"
                boxShadow="md"
            >
                <Container maxW="container.xl">
                    <Flex align="center">
                    <Text fontSize="2xl" fontWeight="bold" letterSpacing="tight">
                        ProCart
                    </Text>
                    
                    <Spacer />

                    <HStack spacing={8}>
                        <Text cursor="pointer" fontWeight="medium">Home</Text>
                        <Text cursor="pointer" fontWeight="medium">Products</Text>
                        
                        {/* Cart Icon with Badge */}
                        <Button colorScheme="transparent" variant="ghost" position="relative" p={2} onClick={onOpen}>
                        <FaShoppingCart size="24px" color="white" />
                        {totalItems > 0 && (
                            <Badge
                            colorScheme="red"
                            borderRadius="full"
                            position="absolute"
                            top="-1"
                            right="-1"
                            px={2}
                            >
                            {totalItems}
                            </Badge>
                        )}
                        </Button>
                    </HStack>
                    </Flex>
                </Container>
            </Box>
            <CartDrawer isOpen={isOpen} onClose={onClose} />
        </>
        
    );
};

export default Navbar;