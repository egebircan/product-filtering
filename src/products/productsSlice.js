import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './productsAPI'
import applyFilters from "../productFiltering"

const initialState = {
  items: [],
  status: 'idle',
}

export const fetchProductsThenUpdateState = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await fetchProducts()
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action) => { state.items = applyFilters(action.payload) }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThenUpdateState.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductsThenUpdateState.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
  },
})

export const { filterProducts } = productsSlice.actions

export const selectProducts = (state) => state.products.items

export default productsSlice.reducer
