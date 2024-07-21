import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  prices: {
    'Indomie, Soto': { type: 'Indomie', item: 'Soto', price: 3500 },
    'Indomie, Goreng Original': { type: 'Indomie', item: 'Goreng Original', price: 4000 },
    'Coca-Cola, 350ml': { type: 'Coca-Cola', item: '350ml', price: 5500 },
    'Coca-Cola, 1 Liter': { type: 'Coca-Cola', item: '1 Liter', price: 10000 },
    'Aqua, 350ml': { type: 'Aqua', item: '350ml', price: 3500 },
    'Aqua, 1,5 Liter': { type: 'Aqua', item: '1,5 Liter', price: 5000 }
  },
  result: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
    },
    calculateResult: (state) => {
      state.result = state.items.map(name => {
        const { type, item, price } = state.prices[name];
        return {
          name,
          type,
          item,
          price
        }
      })
    },
    reset: (state) => {
      state.items = [];
      state.result = [];
    }
  }
})

export const { addItem, removeItem, calculateResult, reset } = orderSlice.actions
export default orderSlice.reducer
