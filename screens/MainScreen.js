import {View,Text,StyleSheet} from 'react-native'
import Buttons from '../components/Button';
function MainScreen({navigation}){
  
    return(
    <View style={styles.container}>
        <View style={styles.textcontainer}>
        <Text>Welcome to our system</Text>
        </View>
        <Buttons >FloorPlan</Buttons>
        <Buttons  >Upload</Buttons>
        
    </View>
    )
}
 
export default MainScreen;

const styles=StyleSheet.create({
container:{
    flex:1,
    flexDirection:'column'
},
textcontainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:1,
    paddingTop:100,
},


})