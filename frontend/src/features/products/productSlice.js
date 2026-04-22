
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/api';

// Async Thunk to fetch products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('/products/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        selectedCategory: 'All',
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload; 
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;