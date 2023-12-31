import React, { useState } from 'react';
import {StyleSheet, View, Text, Pressable, Image, Platform, Dimensions, Modal, TouchableWithoutFeedback,} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Historicoevent() {
  const navigation = useNavigation();

  const backbutton = () => {
    navigation.goBack();
  };

  const [isMenuVisible, setMenuVisible] = useState(false);

  const menu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Pressable style={styles.backButton} onPress={backbutton}>
          <Image source={require('./img/icons/backicon.png')} style={styles.backIcon} />
        </Pressable>

        <Text style={styles.title}>Histórico</Text>

        <Pressable style={styles.button} onPress={menu}>
          <View style={styles.bttbarra}></View>
          <View style={styles.bttbarra}></View>
          <View style={styles.bttbarra}></View>
        </Pressable>
      </View>

      <View style={styles.linha}></View>
      <View style={styles.bottomImageContainer}>
        <Image
          source={require('./img/img_borda_inicio.png')}
          style={styles.bottomImage} 
        />
      </View>

      <Modal
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.modalBackground}>
            <Animatable.View
              style={styles.menuContainer}
              animation={isMenuVisible ? 'slideInUp' : 'slideInDown'}
              duration={500}
            >
              {''}
              <Pressable style={styles.menubtt} onPress={() => console.log('Item 1 clicado')}>
                <Text style={styles.menubtttext}>Item 1</Text>
              </Pressable>
              <Pressable style={styles.menubtt} onPress={() => console.log('Item 2 clicado')}>
                <Text style={styles.menubtttext}>Item 2</Text>
              </Pressable>
              <Pressable style={styles.menubtt} onPress={() => console.log('Item 3 clicado')}>
                <Text style={styles.menubtttext}>Item 3</Text>
              </Pressable>
            </Animatable.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260038',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight * 0.06,
    left: 30,
    zIndex: 1,
  },

  backButton: {
    marginRight: 10,
  },

  backIcon: {
    width: 30,
    height: 24,
  },

  title: {
    fontSize: 19,
    color: '#FFFFFF',
    marginLeft: 20,
  },

  linha: {
    width: Platform.OS === 'web' ? '100%' : '108%',
    height: 1,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: windowHeight * 0.12,
  },

  button: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 18,
    marginLeft: 150,
  },

  bttbarra: {
    width: 31,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginVertical: 3.5,
  },

  bottomImageContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '52%',
    backgroundColor: 'transparent',
  },

  bottomImage: {
    width: Platform.OS === 'web' ? '100%' : '108%',
    height: '100%',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  menuContainer: {
    backgroundColor: '#470F62',
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  menubtt: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  menubtttext: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
