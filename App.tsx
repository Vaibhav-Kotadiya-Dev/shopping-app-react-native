import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/Navigation/AppNavigator';

export type RootStackParamList = {
  ShoppingList: undefined;
  AddEditItem: {itemId?: number; oldName?: string};
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
