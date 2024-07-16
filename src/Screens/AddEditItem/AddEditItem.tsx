import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem, editItem} from '../../Store/shoppingListSlice';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import styles from './AddEditItem.styles';

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
  const dispatch = useDispatch();
  const {itemId, oldName} = route.params;
  const [itemName, setItemName] = useState<string>(oldName || '');

  useEffect(() => {
    navigation.setOptions({
      title: itemId ? 'Edit Item' : 'Add Item',
    });
  }, [navigation, itemId]);

  const handleSave = () => {
    if (itemId) {
      dispatch(editItem({id: itemId, newName: itemName}));
    } else {
      dispatch(addItem({id: Date.now(), itemName, purchased: false}));
    }
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.saveButton,
            !itemName && styles.opactiy,
          ]}
          onPress={handleSave}
          disabled={!itemName}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddEditItem;
