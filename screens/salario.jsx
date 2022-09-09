import React, {useState,useEffect} from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "@react-native-material/core";

const Salario = () => {
  const [user, setUser] = useState({
    name:'',
    salary:0
  });
  
  const [result, setResult] = useState();

  const handleChange = (name, value) => setUser({...user, [name]: value});

  const handleResult = () =>{
    const {name,salary} = user;
    var isss,afp,renta,total;

    if (salary <= 0 || salary < 100){
      Alert.alert("Aviso","Ingrese un salario válido, el salario minimo para ingresar es $100")
    }else{
      isss = Number(salary)* 0.03;
      afp = Number(salary) * 0.04;
      renta = Number(salary) * 0.05;
      total = Number(isss) + Number(afp) + Number(renta);
      setResult(Number(salary) - Number(total))
      Alert.alert("Salario Neto","Nombre:"+name+"\nDescuentos: \nISSS: $"+isss+"\nAFP: $"+afp+"\nRenta: $"+renta+"\nSalario Neto: $"+result)
    }
  }

  return (
    <View>
      <TextInput
        variant="outlined"
        placeholder="Ingrese su nombre"
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange('name',text)}
      />
      <TextInput
        variant="outlined"
        placeholder="Ingrese su salario"
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange('salary',text)}
      />
      <Button title="Calcular Salario Neto" style={styles.boton} onPress={handleResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    margin: 16,
    backgroundColor: "#1A2A37",
  },
});

export default Salario;
