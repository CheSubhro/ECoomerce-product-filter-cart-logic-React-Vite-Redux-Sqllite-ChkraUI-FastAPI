
import { HStack, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../features/products/productSlice';
import CustomButton from './CustomButton'; 

const FilterBar = () => {
    const dispatch = useDispatch();
    const currentCategory = useSelector((state) => state.products.selectedCategory);
    const categories = ['All', 'Electronics', 'Fashion'];

    return (
        <HStack spacing={4} justify="center" my={6}>
            {categories.map((cat) => (
                <CustomButton
                key={cat}
                variant={currentCategory === cat ? "solid" : "outline"}
                onClick={() => dispatch(setCategory(cat))}
                >
                {cat}
                </CustomButton>
            ))}
        </HStack>
    );
};

export default FilterBar;