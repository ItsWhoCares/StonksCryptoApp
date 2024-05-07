import {
  View,
  Text,
  Colors,
  Button,
  Modal as ModalUI,
} from "react-native-ui-lib";
import React from "react";
import { StyleSheet } from "react-native";

const Modal = ({ isVisible, message, setVisible }) => {
  return (
    <ModalUI
      visible={isVisible}
      onBackgroundPress={() => setVisible(null)}
      useGestureHandlerRootView
      animationType="slide"
      transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText} text60 textColor>
            {message}
          </Text>
          <Button
            label="Close"
            onPress={() => setVisible(null)}
            br20
            primaryForeground
            backgroundColor={Colors.primary}
            marginT-10
          />
        </View>
      </View>
    </ModalUI>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.input,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
