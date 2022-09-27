import React, { useState } from "react";
import{ Button,
  image,
  Button,
  StyleSheet,
  Text,
  View, 
  TouchableHighlight}
 from "react-native";
import (useState) from "React";
function Menu(){
{val,setVal}= useState(0);

const countVal=()=>{
  setVal(val+1);
};
  return(
    <View>
    <TouchableHighlight underlayColor="pink" 
    onPress={()=>alert("открыть наш about")}
    >
      <Text>About</Text>
      </TouchableHighlight>

      <TouchableOpacity
      activeOpacity="0.5"
      onPress={()=>{this.countVal()}}
      
      style={{backroundColor:"orange"}}
      >
        <Text>+1</Text>
        </TouchableOpacity>

        <Button title="Вывести значение" onPress={()=>alert(val)}/>
      </View>
  );
}  
export default Menu;