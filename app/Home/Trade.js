import {
  View,
  Text,
  Modal,
  Incubator,
  Colors,
  BorderRadiuses,
} from "react-native-ui-lib";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native";

const { PanView } = Incubator;

const OVERLAY_BACKGROUND_COLOR = Colors.rgba(Colors.$backgroundInverted, 0.3);

const colors = [
  { value: Colors.red10, label: "Red10" },
  { value: Colors.red30, label: "Red30" },
  { value: Colors.red50, label: "Red50" },
  { value: Colors.red70, label: "Red70" },
  { value: Colors.blue10, label: "Blue10" },
  { value: Colors.blue30, label: "Blue30" },
  { value: Colors.blue50, label: "Blue50" },
  { value: Colors.blue70, label: "Blue70" },
  { value: Colors.purple10, label: "Purple10" },
  { value: Colors.purple30, label: "Purple30" },
  { value: Colors.purple50, label: "Purple50" },
  { value: Colors.purple70, label: "Purple70" },
  { value: Colors.green10, label: "Green10" },
  { value: Colors.green30, label: "Green30" },
  { value: Colors.green50, label: "Green50" },
  { value: Colors.green70, label: "Green70" },
  { value: Colors.yellow10, label: "Yellow10" },
  { value: Colors.yellow30, label: "Yellow30" },
  { value: Colors.yellow50, label: "Yellow50" },
  { value: Colors.yellow70, label: "Yellow70" },
];

const Trade = () => {
  const [stickyHeaderIndices, setStickyHeaderIndices] = useState([0]);
  const [showModal, setShowModal] = useState(true);

  return (
    <View flex>
      <Modal
        visible={showModal}
        onBackgroundPress={() => setShowModal(false)}
        transparent
        overlayBackgroundColor={OVERLAY_BACKGROUND_COLOR}
        useGestureHandlerRootView>
        <PanView
          directions={PanView.directions.DOWN}
          dismissible
          animateToOrigin
          containerStyle={styles.panView}
          onDismiss={this.onDialogDismissed}>
          <View style={styles.dialog}>
            <Text text60 margin-s2>
              Title (swipe here)
            </Text>
            <View height={1} bg-grey40 />
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.verticalScroll}
              data={colors}
              renderItem={this.renderVerticalItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </PanView>
      </Modal>
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.grey80,
  },
  panView: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  toast: {
    backgroundColor: Colors.white,
    width: 200,
    height: 40,
    borderRadius: BorderRadiuses.br20,
    borderWidth: 0.5,
    borderColor: Colors.grey30,
  },
  dialog: {
    backgroundColor: Colors.white,
    width: 200,
    height: 300,
    borderRadius: BorderRadiuses.br20,
  },
  verticalScroll: {
    marginTop: 20,
  },
});
