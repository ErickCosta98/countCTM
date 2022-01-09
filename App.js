
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() 
{
  const [stateCount,setstateCount] = useState(0);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('count', jsonValue)
    } catch (e) {
      console.log(e)
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('count')
      return jsonValue != null ? Number(jsonValue) : 0;
    } catch(e) {
      // error reading value
    }
  }
  getData().then(result =>{ setstateCount(result); console.log(result)});
  const [count,setCount] = useState(stateCount)
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.container} onPressIn={() => {setCount( count + 1); storeData(count + 1);  }}>
     <View>
      <Text style={styles.title} >Contador de CTM</Text>
     <Text style={styles.numbers}> {count} </Text>
      </View>
       </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  numbers:{
    fontStyle:'italic',
    fontSize: 90,
    color:'tomato',
    textAlign:'center',
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 360,
    elevation: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 25,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  title:{
    fontStyle:'italic',
    fontSize: 30,
    color:'#fff'
   
  }

});
