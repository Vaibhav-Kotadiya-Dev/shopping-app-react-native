import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

type ShoppingListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShoppingList'
>;

type Props = {
  navigation: ShoppingListNavigationProp;
};

const ShoppingList: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default ShoppingList;
