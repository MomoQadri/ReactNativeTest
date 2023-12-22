import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from "react-native-vector-icons/MaterialIcons";

function HomeScreen(){
  return(
    <View style={styles.container}>
      <Text>Welcome to the Home Page</Text>
    </View>
  );
}
function AboutScreen(){
  return (
      <View>
        <View style={styles.moPicture}>
            <Image
            source={require('./IMG_2630.png')}
            style={{width:250, height:250}}
            />
        </View>
        <Text style={{textAlign: "center", fontSize: 22, fontWeight: "bold" }}>Meet Muhammad!</Text>
          <Text></Text>
      </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="About" component={AboutScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
  },
    moPicture: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});
