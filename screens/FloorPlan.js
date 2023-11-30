import { View, Text, StyleSheet } from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import Buttons from "../components/Button";

import Multiselect from "../components/Multiselect";

// Dummy Data for the MutiSelect

function FloorPlan() {   
    
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
      <Text>Select Your Room types</Text>
      </View>
      <View>
    <Multiselect/>
    <Multiselect/>
      </View>
      <View style={styles.submitContainer}>
        <Buttons>Submit</Buttons>
      </View>
    </View>
  );
}


export default FloorPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop:50,
    alignItems:'center',
    alignContent:'flex-end',
    paddingVertical:250,
    
  },
  textContainer:{
    paddingTop:10,
    paddingBottom:10,
  }
});
