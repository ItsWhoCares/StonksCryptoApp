import {
  View,
  Text,
  Image,
  TextField,
  Button,
  TouchableOpacity,
  Colors,
} from "react-native-ui-lib";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import useCoin from "../Helpers/Hooks/useCoin";
import { Fontisto } from "@expo/vector-icons";
import Keyboard from "../components/Keyboard";
import { buy } from "../Helpers/helpers";
import { useUser } from "../Helpers/supabase";
import Modal from "../components/Modal";
// import TextField from "../components/TextField";

const BuySell = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [coin, price] = useCoin(params);
  const [value, setValue] = React.useState("");
  const user = useUser();
  const [message, setMessage] = React.useState({
    show: false,
    error: false,
    message: "",
  });
  //   console.log(params);
  //   if (!coin) return null;
  console.log(coin.iconUrl);
  return (
    <View flex padding-page bg-background>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "center",
          alignItems: "center",
        }}>
        <View width={35} height={35}>
          <Image
            source={{
              uri: coin?.iconUrl,
            }}
            cachePolicy={"memory-disk"}
            onError={(e) => {
              // console.log("heheheh");
              console.log(e);
            }}
            width={35}
            height={35}
            style={styles.image}
            contentFit="cover"
          />
        </View>

        <Text textColor h4 fSB marginH-10>
          Buy {coin.symbol}
        </Text>
      </View>
      <View row marginT-20>
        <Text textMuted h5 fM>
          I want to pay
        </Text>

        <Text
          textColor
          h5
          fSB
          primary
          style={{
            marginLeft: "auto",
          }}>
          By quantity {"  "}
          <Fontisto name="arrow-swap" size={12} color={Colors.primary} />
        </Text>
      </View>
      <View>
        <TextField
          value={value.toString()}
          //   label="Email"
          //   labelStyle={styles.labelStyle}
          containerStyle={{
            color: Colors.background,
            paddingVertical: 10,
          }}
          // onChangeText={(value) => setEmail(value)}
          placeholder="Please enter amount"
          placeholderTextColor={Colors.textMuted}
          fieldStyle={styles.withFrame}
          textColor
          style={{ fontSize: 16, fontFamily: "CustomFontM" }}
          keyboardType="numeric"
          trailingAccessory={
            <Text textColor h4 fM>
              INR
            </Text>
          }
          showSoftInputOnFocus={false}
        />
        <Text textMuted fM>
          100.00 - 2000000.00 INR
        </Text>
      </View>
      <Keyboard setValue={setValue} />

      <Button
        label="Buy"
        size={Button.sizes.large}
        backgroundColor={Colors.primary}
        background
        fB
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
        onPress={() =>
          buy(
            {
              coin,
              isINR: true,
              value,
              userID: user.id,
            },
            setMessage
          )
        }
      />
      <Modal
        isVisible={message.show}
        message={message?.message}
        setVisible={() => {
          setMessage((prev) => ({ ...prev, show: false }));
          router.back();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.background,
  },
  image: {
    // margin: 20,
  },
  withFrame: {
    borderWidth: 1,
    borderColor: Colors.input,
    padding: 4,
    borderRadius: 6,
    color: Colors.textColor,
    backgroundColor: Colors.background,
    height: 60,
    paddingHorizontal: 15,
    // fontSize: 26,
  },
});

export default BuySell;
