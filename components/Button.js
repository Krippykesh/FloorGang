import {View,Text,StyleSheet, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
function Buttons({children}){
   const navigation=useNavigation();
 return(
  
    <View style={styles.ButtonContainer}>
    <View style={styles.container}>
          
 <Pressable onPress={()=>navigation.navigate(children)}>
    <View style={styles.textContainer}>
        <Text style={styles.textualcontainer}>
        {children}
        </Text>
        </View>
        </Pressable>
    </View>
    </View>

 )
}

export default Buttons;

const styles=StyleSheet.create({
    container:{
       
    },
    textContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    ButtonContainer:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:1,
        paddingHorizontal:1,
        backgroundColor:'#72063c',
        marginBottom:31,
        borderRadius:8,
        alignItems:'center'
    
    },
    textualcontainer:{
        color:'#ffffff',
        fontWeight:'bold'
        
    }

})