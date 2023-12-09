import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import Navbar from "../components/navbar";
import Backbutton from "../components/backbutton";
import CardEvent from "../components/cardEvent";
import MenuBar from "../components/menubar";
import CardSair from "../components/cardSair";

export default function Telaprofile() {
  const navigation = useNavigation();
  const [eventData, setEventData] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [idEvents, setIdEvent] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [sair, setSair] = useState(false);
  const [eventImage, setEventImage] = useState(null);
  const [eventId, setEventId] = useState(null);

  const [seguidores, setSeguidores] = useState("");
  const [seguindo, setSeguindo] = useState("");

  const menu = () => {
    setMenuVisible(true);
  };

  const handleButtonEdit = () => {
    console.log("Botão edit pressionado");
  };

  const route = useRoute();
  const { id } = route.params;
  // const id = 1;
  const { imgProfile } = route.params;

  const idUser = {
    userId_code: id,
  };

  // console.log(imgProfile);

  const handleEventImageClick = () => {
    if (eventId) {
      navigation.navigate("evento", { eventId });
    }
  };

  useEffect(() => {
    axios
      .post("http://localhost:3003/profileUser", idUser)
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        console.log(response.data.results[0]);
        setName(response.data.results[0].User_name);
        setIdade(response.data.results[0].idade);
        setDescricao(response.data.results[0].User_description);
        console.log(response.data.results[0].User_image);
        setProfileImage(response.data.results[0].User_image);
      })
      .catch((error) => {
        console.error(
          "Erro ao enviar ou retono de dados para o backend:",
          error
        );
      });

    axios
      .post("http://localhost:3003/followCount", idUser)
      .then((response) => {
        setSeguidores(response.data.seguidores);
        setSeguindo(response.data.seguindo);
      })
      .catch((error) => {
        console.error(
          "Erro ao enviar ou retono de dados para o backend:",
          error
        );
      });

    axios
      .post("http://localhost:3003/viewEventUser", idUser)
      .then((response) => {
        console.log(response);
        if (!response.data.results) {
          setEventData([])
        }
        else {
          setEventData(response.data.results)
        }
        console.log(eventData);

        response.data.results.forEach(element => {
          setIdEvent(old => [...old, element.Id_App_Events]);
        })
        
        console.log(response.data.results[0].Nm_event);
      })
      .catch((error) => {
        console.error(
          "Erro ao enviar ou retono de dados para o backend:",
          error
        );
      });
    
  }, []);

  useEffect(()=>{
    console.log(idEvents);
  },[idEvents])

  return (
    <View style={styles.container}>
      {sair && <CardSair setSair={setSair} />}
      <Image
        source={require("../assets/images/telap2.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <Backbutton />

      <Pressable style={styles.button} onPress={menu}>
        <View style={styles.bttbarra} />
        <View style={styles.bttbarra} />
        <View style={styles.bttbarra} />
      </Pressable>

      <MenuBar
        isMenuVisible={isMenuVisible}
        setMenuVisible={setMenuVisible}
        menu={menu}
      />

      <View style={styles.innerCircle}>
        <Image
          source={`data:image/png;base64,${profileImage}`}
          style={{ flex: 1, width: "100%", borderRadius: 105 }}
        />
      </View>

      <View style={styles.titlesContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Seguidores</Text>
          <Text style={styles.number}>0</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Seguindo</Text>
          <Text style={styles.number}>0</Text>
        </View>
      </View>

      <View style={styles.editButtonContainer}>
        <Pressable style={styles.editButton} onPress={handleButtonEdit}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </Pressable>
      </View>

      <View style={styles.editButtonContainer}>
        <Pressable style={styles.editButton} onPress={handleButtonEdit}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </Pressable>
      </View>

      {/* <View style={styles.line} /> */}

      <View style={styles.allContainer}>
        <View styles={styles.nameContainer}>
          <Text style={styles.titulo}>{name}</Text>
        </View>

        <View styles={styles.nameContainer1}>
          <Text style={styles.titulo1}>{idade} Anos</Text>
        </View>
      </View>

      <View style={styles.allContainerOne}>
        <View styles={styles.descContainer}>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>
      </View>

      <Image
        source={require("../assets/images/icons/barra.png")}
        style={styles.comentariosTituloImage}
      />

      <ScrollView
        style={{ width: "100%", gap: 16, top: 200, maxHeight: "14%" }}>
        <View style={{ width: "100%", gap: 8 }}>
          {
            
            eventData.map((event, index) => {
              return (
                <CardEvent
                  descricaoEvento={event.desc_event}
                  idUser={id}
                  Event_image={event.Event_image}
                  Nm_event={event.Nm_event}
                  Id_App_Events={idEvents[index]}
                  key={index}
                />
              );
            })
        }
        </View>
      </ScrollView>

      {/* <Pressable
        style={styles.eventImagePlaceholder}
        onPress={handleEventImageClick}>
        <View style={styles.eventImagePlaceholderInner}>
          {eventImage && (
            <View style={{ width: "100%", height: 200 }}>
              <Image
                source={
                  params?.userImage
                    ? { uri: eventImage }
                    : require("../assets/images/icons/people(f).png")
                }
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              />
            </View>
          )}
        </View>
      </Pressable> */}
      <Navbar id={id} imgProfile={imgProfile} />
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#260038",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  circle: {
    width: "100%",
    height: 450,
    borderRadius: 220 / 2,
    backgroundColor: "rgba(123, 85, 85, 0.40)",
    position: "absolute",
    top: windowHeight * 0.06 - 397 / 2,
    justifyContent: "center",
  },

  innerCircle: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 105,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    left: 45,
    top: 100,
  },

  textContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  textContainer1: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: windowHeight * 0.06,
    left: 30,
    zIndex: 1,
  },

  button: {
    position: "absolute",
    backgroundColor: "transparent",
    width: 30,
    height: 18,
    right: 50,
    top: 50,
  },

  bttbarra: {
    width: 31,
    height: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginVertical: 3.5,
  },

  bottomImageContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "52%",
    backgroundColor: "transparent",
  },

  bottomImage: {
    width: Platform.OS === "web" ? "100%" : "108%",
    height: "100%",
  },

  modalContainer: {
    left: 12,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },

  menuContainer: {
    backgroundColor: "#470F62",
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  menubtt: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  menubtttext: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  editButtonContainer: {
    position: "absolute",
    top: 225,
    alignItems: "center",
    marginTop: 10,
  },

  editButton: {
    backgroundColor: "#5E0389",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "inter",
    opacity: 0.8,
  },

  nameContainer: {},

  titulo: {
    right: 135,
    bottom: 55,
    color: "white",
    fontSize: 18,
    fontWeight: "inter",
  },

  titulo1: {
    right: 130,
    bottom: 50,
    color: "#919191",
    fontSize: 14,
    fontWeight: "inter",
  },

  descContainer: {},

  descricao: {
    bottom: 10,
    color: "#919191",
    fontSize: 14,
    fontWeight: "inter",
    maxWidth: 350,
    marginBottom: -80,
  },

  allContainer: {
    position: "absolute",
    left: 152,
    flexDirection: "row",
    top: 440,
  },

  allContainerOne: {
    display: "flex",
    right: 2,
    flexDirection: "row",
    top: 100,
  },

  line: {
    left: 0,
    right: 0,
    bottom: 350,
    height: 2,
    backgroundColor: "white",
    opacity: 0.6,
  },

  comentariosTitulo: {
    top: 470,
    color: "white",
    fontSize: 18,
    fontWeight: "inter",
    textAlign: "left",
  },

  titlesContainer: {
    position: "absolute",
    top: 110,
    right: 42,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  titleContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },

  title: {
    color: "white",
    fontSize: 14,
    opacity: 0.5,
  },

  number: {
    color: "#919191",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },

  comentariosTitulo: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "left",
    alignItems: "flex-start",
    marginBottom: 24,
    width: "100%",
  },

  comentariosTituloImage: {
    width: "108%",
    height: 50,
    resizeMode: "contain",
    top: 195,
  },
});
