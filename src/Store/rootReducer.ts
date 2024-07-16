import {combineReducers} from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
