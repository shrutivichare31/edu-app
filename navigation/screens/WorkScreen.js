import * as React from 'react';
import { View, Text} from 'react-native';

export default function WOrkScreen({navigation}){
    return(
        
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => alert('This is the "work" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Work Screen</Text>
            </View>
         );
}