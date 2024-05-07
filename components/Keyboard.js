import { View, Text, Button, Colors } from "react-native-ui-lib";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const Keyboard = ({ setValue }) => {
  return (
    <View
      backgroundColor={Colors.background}
      style={{
        marginTop: "auto",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <Button
          label="1"
          onPress={() => setValue((prev) => prev + "1")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="2"
          onPress={() => setValue((prev) => prev + "2")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="3"
          onPress={() => setValue((prev) => prev + "3")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <Button
          label="4"
          onPress={() => setValue((prev) => prev + "4")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="5"
          onPress={() => setValue((prev) => prev + "5")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="6"
          onPress={() => setValue((prev) => prev + "6")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <Button
          label="7"
          onPress={() => setValue((prev) => prev + "7")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="8"
          onPress={() => setValue((prev) => prev + "8")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="9"
          onPress={() => setValue((prev) => prev + "9")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <Button
          label="."
          onPress={() => setValue((prev) => prev + ".")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label="0"
          onPress={() => setValue((prev) => prev + "0")}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
        />
        <Button
          label={"<"}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          h2
          labelStyle={{ textAlignVertical: "center" }}
          textColor
          getActiveBackgroundColor={() => Colors.textMuted}
          onPress={() => setValue((prev) => prev.slice(0, -1))}
        />
      </View>
    </View>
  );
};

export default Keyboard;
