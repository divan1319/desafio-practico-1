import { StyleSheet, View, ScrollView } from "react-native";

import {
  AppBar,
  Backdrop,
  BackdropSubheader,
  Button,
  VStack,
  Stack,
} from "@react-native-material/core";
const Home = ({ navigation }) => {
  return (
    <Backdrop
      style={{ backgroundColor: "#1A2A37" }}
    >
      <ScrollView>
      <BackdropSubheader title="Seleccione una opción" />
      <VStack m={50} spacing={50} divider={true}>
        <Button
          title="Ecuación Cuadratica"
          color="#1A2A37"
          style={styles.boton}
          
          onPress={() => navigation.navigate("Ecuación")}
        ></Button>
        <Button
          title="Calcular Salario"
          color="#1A2A37"
          style={styles.boton}
          onPress={() => navigation.navigate("Salario")}
        ></Button>
        <Button
          title="Comparar números"
          color="#1A2A37"
          style={styles.boton}
          onPress={() => navigation.navigate("Número")}
        ></Button>
      </VStack>
      </ScrollView>
    </Backdrop>
  );
};
const styles = StyleSheet.create({
  boton: {
    marginTop:60,
    width: 300,
    height:40,
    borderRadius:50
  },
});

export default Home;
