import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Ecuacion from "./screens/ecuacion";
import Salario from "./screens/salario";
import Numero from "./screens/numero";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#1A2A37" },
            headerTitleStyle: { color: "#ffffff" },
            title:'Desafio Práctico 1 DPS05L'
          }}
        />
        <Stack.Screen
          name="Ecuación"
          component={Ecuacion}
          options={{
            headerStyle: { backgroundColor: "#1A2A37" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor:'#ffffff',
            title:'Resolver Ecuación Cuadratica'
          }}
        />
        <Stack.Screen
          name="Salario"
          component={Salario}
          options={{
            headerStyle: { backgroundColor: "#1A2A37" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor:'#ffffff',
            title:'Calcular Salario'
          }}
        />
        <Stack.Screen
          name="Número"
          component={Numero}
          options={{
            headerStyle: { backgroundColor: "#1A2A37" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor:'#ffffff',
            title:'Comparar Números'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
