
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Image,
  Text,
  Box,
  Divider,
  IconButton,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseQuantity, clearCart } from './cartSlice'; 
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import CheckoutModal from './CheckoutModal';
import CustomButton from '../../components/common/CustomButton';

const CartDrawer = ({ isOpen, onClose }) => {

    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // For Success Modal Control useDisclosure 
    const { 
        isOpen: isSuccessOpen, 
        onOpen: onSuccessOpen, 
        onClose: onSuccessClose 
    } = useDisclosure();

    const handleCheckout = () => {
        onSuccessOpen();      
        dispatch(clearCart()); 
        onClose();            
    };

    return (
        <>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
            <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">Your Shopping Cart</DrawerHeader>

                    <DrawerBody>
                    {cartItems.length === 0 ? (
                        <Text mt={10} textAlign="center">Your cart is empty!</Text>
                    ) : (
                        <VStack align="stretch" spacing={4}>
                        {cartItems.map((item) => (
                            <Box key={item.id}>
                            <HStack spacing={4} align="center">
                                <Image src={item.image} boxSize="60px" borderRadius="md" objectFit="cover" />
                                <VStack align="start" flex="1" spacing={0}>
                                <Text fontWeight="bold" fontSize="sm">{item.name}</Text>
                                <Text fontSize="xs" color="gray.500">${item.price} x {item.quantity}</Text>
                                </VStack>
                                
                                <HStack size="sm">
                                <IconButton size="xs" icon={<FaMinus />} onClick={() => dispatch(decreaseQuantity(item.id))} />
                                <Text fontWeight="bold">{item.quantity}</Text>
                                <IconButton size="xs" icon={<FaPlus />} onClick={() => dispatch(addToCart(item))} />
                                </HStack>

                                <IconButton 
                                colorScheme="red" 
                                variant="ghost" 
                                size="sm" 
                                icon={<FaTrash />} 
                                onClick={() => dispatch(removeFromCart(item.id))} 
                                />
                            </HStack>
                            <Divider mt={4} />
                            </Box>
                        ))}
                        </VStack>
                    )}
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px" display="block">
                    <Flex justify="space-between" mb={4}>
                        <Text fontWeight="bold">Total Price:</Text>
                        <Text fontWeight="bold" color="blue.600">${totalPrice.toFixed(2)}</Text>
                    </Flex>
                    <CustomButton colorScheme="blue" width="full" isDisabled={cartItems.length === 0} onClick={handleCheckout}>
                        Checkout Now
                    </CustomButton>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <CheckoutModal isOpen={isSuccessOpen} onClose={onSuccessClose} />
        </>
    );
};

export default CartDrawer;