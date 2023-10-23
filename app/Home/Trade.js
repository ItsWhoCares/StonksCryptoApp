import { View, Text } from "react-native-ui-lib";
import React, { useState } from "react";
import { ScrollView } from "react-native";

const Trade = () => {
  const [stickyHeaderIndices, setStickyHeaderIndices] = useState([0]);

  return (
    <View bg-card padding-page>
      <ScrollView stickyHeaderIndices={stickyHeaderIndices} nestedScrollEnabled>
        <View>
          <Text>Sticky Header</Text>
        </View>

        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.hhhhhh</Text>

        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.</Text>
        <Text text10>This is the nested scroll view.over</Text>
        <View style={{ height: 50 }}>
          <ScrollView nestedScrollEnabled>
            <Text text10>This is the nested scroll view.</Text>
            <Text text10>This is the nested scroll view.</Text>
            <Text text10>This is the nested scroll view.</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Trade;
