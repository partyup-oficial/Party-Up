import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Platform, Dimensions, Pressable, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Report({ navigation }) {

  const VamosLa = () => {
    navigation.navigate('report2');
  };

  const backbutton = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('./img/telanexist.png')}
      style={styles.container}
      resizeMode="cover"
      >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Animatable.Image
            animation="fadeInUp"
            source={require('./img/icons/report.png')}
            style={styles.reportlogo}
          />

        <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={backbutton}>
          <Image source={require('./img/icons/backicon.png')} style={styles.backIcon} />
        </Pressable>
        </View>
          
        <Animatable.View animation="fadeInUp">
          <Text style={styles.title}>Relatar um problema</Text>
        </Animatable.View>

          <View style={styles.topic}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.topicText}>
              Erros e bugs são prejudiciais para você e para outros usuários, iremos apurar sua mensagem e tomar as medidas certas.
            </Text>
          </View>

          <View style={styles.topic}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.topicText}>
              Não use e aproveite de qualquer erro dessa plataforma para benefício próprio, estará sujeito a banimento da conta.
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.overlaybtt}>
        <Animatable.View delay={700} animation="fadeInUp" style={styles.vamosLaButton}>
          <Pressable style={styles.button} onPress={VamosLa}>
            <Text style={styles.buttonText}>Avançar</Text>
          </Pressable>
        </Animatable.View>
        </View>
    </ImageBackground>
  );
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    justifyContent: 'flex-start',
    top: 24,  
    alignItems: 'center',
    padding: 16,
  },

  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight * 0.06,
    left: 30,
    zIndex: 1,
  },

  reportlogo: {
    width: 120,
    height: 115,
    opacity: 0.8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    top: 24,
  },

  backButton: {
    right: 8,
    bottom: 30,
  },

  backIcon: {
    width: 30,
    height: 24,
  },
  
  topic: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    top: 130,
  },
  
  bullet: {
    fontSize: 16,
    marginRight: 10,
    color: '#FFFFFF',
  },
  
  topicText: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  button: {
    backgroundColor: 'rgba(255, 1, 108, 0.4)',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 10,
    position: 'absolute',
    bottom: windowHeight * 0.04,
  },

  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
  },

  vamosLaButton: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },

  overlaybtt: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.01)', 
    alignItems: 'center',
    padding: 16,
  },
});
