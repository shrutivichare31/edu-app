import * as React from "react";
import DocumentPicker from "react-native-document-picker";
import { View, Text, TouchableOpacity, ImagePickerIOS ,Button} from "react-native";
import * as ImagePicker from "react-native-image-picker"
import launchImageLibrary from 'react-native-image-picker';
export default class Upload extends React.Component {
  handleChoosenPhoto = () => {
    const options= {};
    ImagePicker.launchImageLibrary(options , response =>{
      console.log("response",response);
    });


    
  }
  render() {
    
    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>       
        <Button title="chosen photo" onPress={this.handleChoosenPhoto} />
      </View>
      
    )
  }
}
