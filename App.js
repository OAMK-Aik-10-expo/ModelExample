import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);


  return (
    <View style={styles.container}>
      <Pressable onPress={handleOpenModal}>
        <Text>Show modal message</Text>
      </Pressable>
      <ModalComponent visible={modalVisible} onClose={handleCloseModal} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
