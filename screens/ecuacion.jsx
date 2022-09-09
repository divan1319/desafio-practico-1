import React , {useState}from "react";
import { View, StyleSheet } from "react-native";
import { TextInput,Button , Text} from "@react-native-material/core";

const Ecuacion = () => {

  const [valor, setValor] = useState({a:0, b:0,c:0});
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();

  const handleChange = (name, value) => setValor({...valor, [name]: value})

const handleResult =  () => {
  const {a,b,c} = valor;
  if (a == 0) {
    alert("El valor de 'a' no puede ser 0 :(")
  }else{
    const raiz = Number(b**2) - Number(4*c*a)
    setResult1( (-Number(b) + Math.sqrt(raiz))/ Number(2*a))
    setResult2( (-Number(b) - Math.sqrt(raiz))/ Number(2*a))
  }
}

  return (
    <>
      <TextInput
        variant="outlined"
        placeholder='Ingrese el valor de "a" '
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange('a',text)}
        keyboardType="numeric"
        
      />
      <TextInput
        variant="outlined"
        placeholder='Ingrese el valor de "b" '
        color="#1A2A37"
        style={{ margin: 16 }}
        keyboardType={"number-pad"}
        onChangeText={(text) => handleChange('b',text)}
      />
      <TextInput
        variant="outlined"
        placeholder='Ingrese el valor de "c" '
        color="#1A2A37"
        style={{ margin: 16 }}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('c',text)}
        
      />
<Button title='Calcular' style={styles.boton} onPress={handleResult} />
<Text style={styles.resultado}>Los resultados son: { isNaN(result1) && isNaN(result2) ?  "La Ecuación no tiene solución" : result1.toFixed(2) +","+result2.toFixed(2)}
</Text>
    </>
  );
};

const styles = StyleSheet.create({
  boton: {
    margin:16,
    backgroundColor:'#1A2A37'
  },
  resultado:{
    margin:16
  }
});

export default Ecuacion;
