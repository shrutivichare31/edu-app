import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import ChatroomScreen from './screens/ChatroomScreen';
import MeetingScreen from './screens/MeetingScreen';
import WorkScreen from './screens/WorkScreen';
import ScheduleScreen from './screens/ScheduleScreen'

//screenNames
const homeName='Home';
const workName='Work';
const meetingName='Meeting';
const chatroomName='Chatroom';
const scheduleName='Schedule';

const Tab=createBottomTabNavigator();


export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      //initialRouteName={homeName}
      screenOptions={({route})=>({
        //to remove header
        headerShown: false,
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          let rn=route.name;

          if(rn=== homeName){
            iconName = focused ? 'home' : 'home-outline'
          }else if(rn=== meetingName){
            iconName = focused ? 'videocam' : 'videocam-outline'
          }else if(rn=== workName){
            iconName = focused ? 'document' : 'document-outline'  
          }else if(rn=== scheduleName){
            iconName = focused ? 'calendar' : 'calendar-outline'
          }else if(rn=== chatroomName){
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'  
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
      })}
     
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>
        
      
      <Tab.Screen name={workName} component={WorkScreen}/>
      <Tab.Screen name={scheduleName} component={ScheduleScreen}/>
      <Tab.Screen name={homeName} component={HomeScreen}/>
      <Tab.Screen name={meetingName} component={MeetingScreen}/>
      <Tab.Screen name={chatroomName} component={ChatroomScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
