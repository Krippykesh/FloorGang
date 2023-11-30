import {Text,View} from 'react-native'
import MultiSelect from 'react-native-multiple-select';
import React, {useState, useEffect} from 'react';
const items = [
    // name key is must. It is to show the text in front
    {id: 1, name: 'kitchen'},
    {id: 2, name: 'bathroom'},
    {id: 3, name: 'hall'},
    {id: 4, name: 'veranda'},
    {id: 5, name: 'living room'},
    {id: 6, name: 'bed room'},
  ];

function Multiselect(){
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
      // Set Selected Items
      setSelectedItems(selectedItems);
    };
    return(
               <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        />
    )
}
export default Multiselect