import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Acesstermos from "./src/pages/acesstermos";
import Index from "./src/pages/index";
import Login from "./src/pages/login";
import Cadastro from "./src/pages/cadastro";
import Cadastropart2 from "./src/pages/cadastropart2";
import Cadastropart3 from "./src/pages/cadastropart3";
import Cadevento from "./src/pages/cadevento";
import Cadevento2 from "./src/pages/cadevento2";
import Cadevento3 from "./src/pages/cadevento3";
import Historicoevent from "./src/pages/historicoevent";
import Search from "./src/pages/search";
import Searched from "./src/pages/searched";
import Notificacao from "./src/pages/notificacoes";
import Termos from "./src/pages/termos";
import Telaprincipal from "./src/pages/telaprincipal";
import Telaprofile from "./src/pages/telaprofile";
import Dashboard from "./src/pages/dashboard";
import Report from "./src/pages/report";
import Report2 from "./src/pages/report2";
import Report3 from "./src/pages/report3";
import Evento from "./src/pages/evento";
import Eventoedit from "./src/pages/eventoedit";
import Settings from "./src/pages/settings";
import Tags from "./src/pages/tags";
import Comentario from "./src/pages/comentario";
import Myevent from "./src/pages/myevent";
import Eventoedit2 from "./src/pages/eventoedit2";
import Event_progress from "./src/pages/event_progress";
import Emailvalidation from "./src/pages/emailvalidation";
import Location from "./src/pages/location";
import Forgotpassword from "./src/pages/forgotpassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="index"
          component={Evento}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadastropart2"
          component={Cadastropart2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadastropart3"
          component={Cadastropart3}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="termos"
          component={Termos}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="notificacao"
          component={Notificacao}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="telaprincipal"
          component={Telaprincipal}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadevento"
          component={Cadevento}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadevento2"
          component={Cadevento2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="historicoevent"
          component={Historicoevent}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="search"
          component={Search}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="telaprofile"
          component={Telaprofile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="searched"
          component={Searched}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="report"
          component={Report}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="evento"
          component={Evento}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="eventoedit"
          component={Eventoedit}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="cadevento3"
          component={Cadevento3}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="tags"
          component={Tags}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="report2"
          component={Report2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="report3"
          component={Report3}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="comentario"
          component={Comentario}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="myevent"
          component={Myevent}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="eventoedit2"
          component={Eventoedit2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="settings"
          component={Settings}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="event_progress"
          component={Event_progress}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="emailvalidation"
          component={Emailvalidation}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="location"
          component={Location}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="forgotpassword"
          component={Forgotpassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="acesstermos"
          component={Acesstermos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
