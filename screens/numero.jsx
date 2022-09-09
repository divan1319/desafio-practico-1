import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "@react-native-material/core";

const Numero = () => {
  const [numeros, setNumeros] = useState({ n1: 0, n2: 0, n3: 0 });

  const handleChange = (name, value) =>
    setNumeros({ ...numeros, [name]: value });

  const handleResult = () => {
    const { n1, n2, n3 } = numeros;
    let suma;
    if (Number(n1) <= 0 || Number(n2) <= 0 || Number(n3) <= 0) {
      Alert.alert("Aviso", "No puede ingresar ceros ni negativos");
    } else {
      if (Number(n1) > Number(n2) && Number(n1) > Number(n3)) {
        if (Number(n2) > Number(n3)) {
          if (Number(n3) > 10 && Number(n1) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n1}\nNúmero Menor: ${n3}\nComo ${n1} es menor a 50 se resta 5 a ${n3} y ${n3} es mayor a 10 se suma 10 a ${n1}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n1) + 10
              } \nNúmero menor: ${Number(n3) - 5}`
            );
          } else if (Number(n1) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n1} \nEl número menor es: ${n3} \nComo ${n1} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n3) - 5
              }`
            );
          } else if (Number(n3) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n1} \nEl número menor es: ${n3} \nComo ${n3} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n1) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es:" + n1 + "\nEl número menor es: " + n3
            );
          }
        } else {
          if (Number(n2) > 10 && Number(n1) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n1}\nNúmero Menor: ${n2}\nComo ${n1} es menor a 50 se resta 5 a ${n2} y ${n2} es mayor a 10 se suma 10 a ${n1}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n1) + 10
              } \nNúmero menor: ${Number(n2) - 5}`
            );
          } else if (Number(n1) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n1} \nEl número menor es: ${n2} \nComo ${n1} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n2) - 5
              }`
            );
          } else if (Number(n2) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n1} \nEl número menor es: ${n2} \nComo ${n2} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n1) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es: " + n1 + "\nEl número menor es: " + n2
            );
          }
        } //aqui termina primera comprobacion
      } else if (Number(n2) > Number(n1) && Number(n2) > Number(n3)) {
        if (Number(n1) > Number(n3)) {
          if (Number(n3) > 10 && Number(n2) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n2}\nNúmero Menor: ${n3}\nComo ${n2} es menor a 50 se resta 5 a ${n3} y ${n3} es mayor a 10 se suma 10 a ${n2}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n2) + 10
              } \nNúmero menor: ${Number(n3) - 5}`
            );
          } else if (Number(n2) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n2} \nEl número menor es: ${n3} \nComo ${n2} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n3) - 5
              }`
            );
          } else if (Number(n3) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n2} \nEl número menor es: ${n3} \nComo ${n3} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n2) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es:" + n2 + "\nEl número menor es: " + n3
            );
          }
        } else {
          if (Number(n1) > 10 && Number(n2) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n2}\nNúmero Menor: ${n1}\nComo ${n2} es menor a 50 se resta 5 a ${n1} y ${n1} es mayor a 10 se suma 10 a ${n2}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n2) + 10
              } \nNúmero menor: ${Number(n1) - 5}`
            );
          } else if (Number(n2) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n2} \nEl número menor es: ${n1} \nComo ${n2} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n1) - 5
              }`
            );
          } else if (Number(n1) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n2} \nEl número menor es: ${n1} \nComo ${n1} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n2) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es: " + n2 + "\nEl número menor es: " + n1
            );
          }
        } // aqui termina segunda comprobacion
      } else if (Number(n3) > Number(n1) && Number(n3) > Number(n2)) {
        if (Number(n1) > Number(n2)) {
          if (Number(n2) > 10 && Number(n3) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n3}\nNúmero Menor: ${n2}\nComo ${n3} es menor a 50 se resta 5 a ${n2} y ${n2} es mayor a 10 se suma 10 a ${n3}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n3) + 10
              } \nNúmero menor: ${Number(n2) - 5}`
            );
          } else if (Number(n3) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n3} \nEl número menor es: ${n2} \nComo ${n3} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n2) - 5
              }`
            );
          } else if (Number(n2) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n3} \nEl número menor es: ${n2} \nComo ${n2} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n3) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es:" + n3 + "\nEl número menor es: " + n2
            );
          }
        } else {
          if (Number(n1) > 10 && Number(n3) < 50) {
            Alert.alert(
              "Resultado",
              `Número mayor: ${n3}\nNúmero Menor: ${n1}\nComo ${n3} es menor a 50 se resta 5 a ${n1} y ${n1} es mayor a 10 se suma 10 a ${n3}
              \nNuevos resultados\nNúmero mayor: ${
                Number(n3) + 10
              } \nNúmero menor: ${Number(n1) - 5}`
            );
          } else if (Number(n3) < 50) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n3} \nEl número menor es: ${n1} \nComo ${n3} es menor a 50, el numero menor se le resta 5 y ahora es: ${
                Number(n1) - 5
              }`
            );
          } else if (Number(n1) > 10) {
            Alert.alert(
              "Resultado",
              `El número mayor es: ${n3} \nEl número menor es: ${n1} \nComo ${n1} es mayor a 10, el numero mayor se le agrega 10 y ahora es: ${
                Number(n3) + 10
              }`
            );
          } else {
            Alert.alert(
              "Resultado",
              "El número mayor es: " + n3 + "\nEl número menor es: " + n1
            );
          }
        }
      }
    }
  };

  return (
    <View>
      <TextInput
        variant="outlined"
        placeholder="Ingrese un número"
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange("n1", text)}
      />
      <TextInput
        variant="outlined"
        placeholder="Ingrese un número"
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange("n2", text)}
      />
      <TextInput
        variant="outlined"
        placeholder="Ingrese un número"
        color="#1A2A37"
        style={{ margin: 16 }}
        onChangeText={(text) => handleChange("n3", text)}
      />
      <Button
        title="Comparar Números"
        style={styles.boton}
        onPress={handleResult}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    margin: 16,
    backgroundColor: "#1A2A37",
  },
});

export default Numero;
