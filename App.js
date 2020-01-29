import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, FlatList, Text, Alert } from 'react-native';
 
import ProgressiveImage from './ProgressiveImage';

import DummyData from "./dummy";

export default class App extends Component {
 
 constructor(props) {
 
   super(props);
 
   this.state = {
 
     isLoading: true
 
   }
 
 
 }
 
GetItem (name) {
  
 Alert.alert(name);
 
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
 
 render() {
  
   return (
 
     <View style={styles.MainContainer}>
 
       <FlatList
       
        data={ DummyData }
        
        ItemSeparatorComponent = {this.FlatListItemSeparator}
 
        renderItem={({item}) => 
            <View style={{flex:1, flexDirection: 'row'}}>
              <ProgressiveImage source = {{ uri: item.image_url }} style={styles.imageView}  />
              <Text onPress={this.GetItem.bind(this, item.image_name)} style={styles.textView} >{item.image_name}</Text>
            </View>
          }

        keyExtractor={(item, index) => index.toString()}
        
        />
 
     </View>
   );
  }
 
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
imageView: {
 
    width: 100,
    height: 100 ,
    margin: 7,
    borderRadius : 7
 
},
 
textView: {
 
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
 
}
 
});
