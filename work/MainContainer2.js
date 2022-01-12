import { useRef, useState } from 'react';
import * as React from 'react'
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Tab ICons.

import home from './assets/home.png';
;
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
// Menu
import menu from './assets/menu.png';
import close from './assets/close.png';




//homepage
export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState("Classes");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
    

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Classes", home)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Enrolled", settings)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        //to change background color of home
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>

          </TouchableOpacity>
          
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

          

<TouchableOpacity
         onPress={() => this.OpenDocumentFile()}
          style={{
            borderRadius: 10,
            padding: 20,
            width: "20%",
            alignItems: "",
            backgroundColor: "#bfb6f6",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
        </Animated.View>

      </Animated.View>
      

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

/*export default class Upload extends React.Component {
  async OpenDocumentFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res.uri, res.type, res.name, res.size);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err
      }
    }
  }}
   
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       
        <TouchableOpacity
        // onPress={() => this.OpenDocumentFile()}
          style={{
            borderRadius: 10,
            padding: 20,
            width: "70%",
            alignItems: "center",
            backgroundColor: "#bfb6f6",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Select Your Document</Text>
        </TouchableOpacity>
      </View>*/