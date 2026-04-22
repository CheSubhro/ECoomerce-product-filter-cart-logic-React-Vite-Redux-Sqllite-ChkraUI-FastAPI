import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import CustomButton from '../../components/common/CustomButton';

const CheckoutModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">Order Placed Successfully!</ModalHeader>
                <ModalBody>
                <VStack spacing={4} py={6}>
                    <FaCheckCircle size="50px" color="green" />
                    <Text fontSize="lg" textAlign="center">
                    Thank you for shopping with **ProCart**. Your order is on the way!
                    </Text>
                </VStack>
                </ModalBody>
                <ModalFooter justifyContent="center">
                <CustomButton onClick={onClose}>
                    Continue Shopping
                </CustomButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CheckoutModal;