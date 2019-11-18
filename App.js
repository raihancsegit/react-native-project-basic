import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{ padding:50 }}>
      <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput placeholder="Course Goal" style={{ borderColor:'black', borderWidth:1,padding:10}}/>
        <Button title="Change text"/>
      </View>
    </View>
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
