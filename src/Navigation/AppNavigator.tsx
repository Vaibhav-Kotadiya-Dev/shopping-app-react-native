import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingList from '../Screens/ShoppingList';
import AddEditItem from '../Screens/AddEditItem';

export type RootStackParamList = {
  ShoppingList: undefined;
  AddEditItem: {itemId?: number; oldName?: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{title: 'Shopping List'}}
        />
        <Stack.Screen
          name="AddEditItem"
          component={AddEditItem}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: '#000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
