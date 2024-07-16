import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../Store/store';
import {deleteItem, markItemAsPurchased} from '../../Store/shoppingListSlice';
import {Swipeable} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {AnimatedFAB} from 'react-native-paper';
import styles from './ShoppingList.styles';

type ShoppingListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShoppingList'
>;

type Props = {
  navigation: ShoppingListScreenNavigationProp;
};

const ShoppingListScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(
    (state: RootState) => state.shoppingList.items,
  );

  const renderItem = ({
    item,
  }: {
    item: {id: number; itemName: string; purchased: boolean};
  }) => (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => confirmDelete(item.id)}>
          <MaterialCommunityIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
      )}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.itemTextContainer} onPress={() => {}}>
          <Text
            style={[
              styles.itemText,
              item.purchased && styles.itemTextPurchased,
            ]}>
            {item.itemName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(markItemAsPurchased({id: item.id}))}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={item.purchased ? '#2ecc71' : '#ccc'}
          />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );

  const confirmDelete = (itemId: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => dispatch(deleteItem({id: itemId})),
        },
      ],
      {cancelable: true},
    );
  };

  const onAddItem = () => {};

  const emptyComponent = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>Your shopping list is empty!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flexGrow}
        ListEmptyComponent={emptyComponent}
      />
      <AnimatedFAB
        icon={'plus'}
        label={'Add'}
        extended
        onPress={onAddItem}
        visible
        animateFrom={'left'}
        style={styles.fabStyle}
      />
    </View>
  );
};

export default ShoppingListScreen;
