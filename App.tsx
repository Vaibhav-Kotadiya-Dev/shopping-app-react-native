import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/Store/store';
import ShoppingListScreen from './src/Screens/ShoppingList';
import AddEditItemScreen from './src/Screens/AddEditItem';

export type RootStackParamList = {
  ShoppingList: undefined;
  AddEditItem: {itemId?: number; oldName?: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ShoppingList">
          <Stack.Screen
            name="ShoppingList"
            component={ShoppingListScreen}
            options={{title: 'Shopping List'}}
          />
          <Stack.Screen
            name="AddEditItem"
            component={AddEditItemScreen}
            options={{
              headerBackTitleVisible: false,
              headerTintColor: '#000',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
