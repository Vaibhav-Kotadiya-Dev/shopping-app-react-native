import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ShoppingListItem {
  id: number;
  itemName: string;
  purchased: boolean;
}

interface ShoppingListState {
  items: ShoppingListItem[];
}

const initialState: ShoppingListState = {
  items: [
    {id: 1, itemName: 'Apples', purchased: false},
    {id: 2, itemName: 'Bananas', purchased: true},
    {id: 3, itemName: 'Milk', purchased: false},
  ],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ShoppingListItem>) {
      state?.items?.push(action?.payload);
    },
    editItem(state, action: PayloadAction<{id: number; newName: string}>) {
      const {id, newName} = action?.payload;
      const existingItem = state?.items?.find(item => item?.id === id);
      if (existingItem) {
        existingItem.itemName = newName;
      }
    },
    deleteItem(state, action: PayloadAction<{id: number}>) {
      const {id} = action?.payload;
      state.items = state?.items?.filter(item => item.id !== id);
    },
    markItemAsPurchased(state, action: PayloadAction<{id: number}>) {
      const {id} = action?.payload;
      const item = state?.items?.find(i => i?.id === id);
      if (item) {
        item.purchased = !item.purchased;
      }
    },
  },
});

export const {addItem, editItem, deleteItem, markItemAsPurchased} =
  shoppingListSlice.actions;
export default shoppingListSlice.reducer;
