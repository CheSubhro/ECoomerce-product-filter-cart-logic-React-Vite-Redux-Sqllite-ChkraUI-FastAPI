
import { Button } from '@chakra-ui/react';

const CustomButton = ({ children, onClick, isLoading = false, ...props }) => {
    return (
        <Button
            isLoading={isLoading}
            onClick={onClick}
            bgGradient="linear(to-r, teal.500, orange.500)" 
            color="white"
            borderRadius="lg"
            fontWeight="bold"
            _hover={{ 
                bgGradient: "linear(to-r, teal.600, orange.600)", 
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
            }}
            _active={{
                bgGradient: "linear(to-r, teal.700, orange.700)",
                transform: 'scale(0.98)'
            }}
            transition="all 0.2s"
            {...props}
        >
            {children}
        </Button>
    );
};

export default CustomButton;