
import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import ProductList from './features/products/ProductList';
import Navbar from './components/layout/Navbar';

function App() {
    return (
        <ChakraProvider>
            <Box>
                <Navbar />
                <Container maxW="container.xl" mt={10}>
                <ProductList />
                </Container>
            </Box>
        </ChakraProvider>
    );
}

export default App;