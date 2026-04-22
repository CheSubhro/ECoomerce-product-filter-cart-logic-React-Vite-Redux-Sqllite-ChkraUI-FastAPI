
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { 
  SimpleGrid, 
  Box, 
  Image, 
  Text, 
  Badge, 
  Heading, 
  VStack 
} from '@chakra-ui/react';
import { addToCart } from '../cart/cartSlice';

// Components
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import CustomButton from '../../components/common/CustomButton';
import FilterBar from '../../components/common/FilterBar';

const ProductList = () => {

    const dispatch = useDispatch();
    const { items, selectedCategory, status ,error} = useSelector((state) => state.products);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    // Filtering Logic
    const filteredItems = selectedCategory === 'All' 
        ? items 
        : items.filter(item => item.category === selectedCategory);

    if (status === 'loading') return <LoadingSpinner label="Fetching Products..." />;
    if (status === 'failed') return <ErrorMessage message={error} />;

    return (
        <Box p={5}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">Our Products</Heading>
            <FilterBar />
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                {filteredItems.map((product) => (
                    <Box 
                        key={product.id} 
                        borderWidth="1px" 
                        borderRadius="lg" 
                        overflow="hidden" 
                        p={4}
                        bg="white"
                        boxShadow="sm"
                        _hover={{ boxShadow: "md" }}
                    >
                        <Box h="200px" display="flex" alignItems="center" justifyContent="center">
                                <Image 
                                src={product.image} 
                                alt={product.name} 
                                maxH="100%" 
                                objectFit="contain" 
                                />
                        </Box>    
                        <VStack align="start" mt={2}>
                            <Badge>{product.category}</Badge>
                            <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
                            <Text color="gray.600">${product.price}</Text>
                            <CustomButton 
                            mt={3} 
                            width="full"
                            onClick={() => dispatch(addToCart(product))}
                            >
                            Add to Cart
                            </CustomButton>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProductList;