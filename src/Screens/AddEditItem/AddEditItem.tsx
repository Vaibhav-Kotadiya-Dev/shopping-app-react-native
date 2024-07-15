import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

type AddEditItemNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddEditItem'
>;
type AddEditItemRouteProp = RouteProp<RootStackParamList, 'AddEditItem'>;

type Props = {
  navigation: AddEditItemNavigationProp;
  route: AddEditItemRouteProp;
};

const AddEditItem: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default AddEditItem;
