import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FloorPlan from './screens/FloorPlan';
import MainScreen from './screens/MainScreen';
import Submit from './screens/Submit';
import Upload from './screens/UploadScreen';


const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen}/>
          <Stack.Screen name="FloorPlan" component={FloorPlan}/>
          <Stack.Screen name="Upload" component={Upload}/>
          <Stack.Screen name="Submit" component={Submit}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
