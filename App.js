import  React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';



export default function App() {
  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState ('');

  function soma(){
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert("O resultado é : "+ resultado);

  }

   function subtrair(){
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert("O resultado é : "+ resultado);

  }

   function multiplicar(){
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert("O resultado é : "+ resultado);

  }

   function dividir(){
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert("O resultado é : "+ resultado);

  }




  return (

    <View style={styles.container}>
    <Text style= {styles.titulo}> Soma de Valores </Text>
    <TextInput
     style = {styles.input0} 
     keyboardType='numeric' 
     placeholder ="Digite um número..."
     onChangeText = {(num1)=> setNum1(num1)}
    />


    <TextInput style = {styles.input1}
     keyboardType='numeric'
     placeholder ="Digite um número..."
     onChangeText = {(num2)=> setNum2(num2)}
     />
    <View style = {styles.cxinp}>
    <TouchableOpacity style = {styles.btn} onPress = {soma}>
    <Text style = {styles.btntxt}> Somar </Text> 
    </TouchableOpacity>

     <TouchableOpacity style = {styles.btn} onPress = {subtrair}>
    <Text style = {styles.btntxt}> Subtrair </Text> 
    </TouchableOpacity>

     <TouchableOpacity style = {styles.btn} onPress = {multiplicar}>
    <Text style = {styles.btntxt}> Multiplicar </Text> 
    </TouchableOpacity>

     <TouchableOpacity style = {styles.btn} onPress = {dividir}>
    <Text style = {styles.btntxt}> Dividir </Text> 
    </TouchableOpacity>
    </View>
    
    </View>

    
   
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input0:{
    backgroundColor :'#87CEFA',
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 20
  },

  input1:{
    backgroundColor: '#7B68EE',
    margin:35,
    borderRadius:15,
    padding: 10,
    fontSize:20
  
  },
  btn :{
    backgroundColor: '#FFA500',
    marginTop: 20,
    marginLeft: 50,
    borderRadius:15,
    padding: 10,
    fontSize:15,
    alignItems: "center",
    width: 110,
    position: "relative",
  },

  cxinp :{
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20

  },


  btntxt :{
  fontWeight: "bold"
  }


});
