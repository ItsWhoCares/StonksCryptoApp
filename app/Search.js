import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { Colors, View, TextField, Button, Text } from "react-native-ui-lib";
import { Tabs, router, Stack, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { Input, Icon } from "@rneui/themed";
import { FlatList } from "react-native";
import { searchCoin } from "../Helpers/helpers";
import SearchCoinItem from "../components/SearchCoinItem";

import { FlashList } from "@shopify/flash-list";

const Search = () => {
  const params = useLocalSearchParams();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const iter = setTimeout(() => {
      console.log(searchText);
      searchCoin(searchText).then((res) => {
        setSearchResults(res);
        console.log(res);
      });
    }, 500);
    return () => clearInterval(iter);
  }, [searchText]);
  return (
    <View flex bg-background useSafeArea>
      {/* <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.background,
            shadowColor: null,
            // borderBottomColor: Colors.card,
            elevation: 0,
          },
          headerTitle: "Choose Crypto",
          headerTitleAlign: "center",

          headerTitleStyle: {
            color: Colors.textColor,
            fontSize: 18,
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              style={{
                marginLeft: 15,
              }}
              color={Colors.mutedIcon}
              onPress={() => router.back()}
            />
          ),
        }}
      /> */}
      <View
        style={{ backgroundColor: Colors.background }}
        paddingT-10
        paddingH-20>
        <Input
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          leftIcon={{
            type: "font-awesome",
            name: "search",
            color: Colors.mutedIcon,
            size: 18,
          }}
          selectionColor={Colors.primary}
          containerStyle={{
            paddingHorizontal: 0,
          }}
          inputContainerStyle={{
            backgroundColor: Colors.inputField,
            borderWidth: 1,
            borderColor: Colors.inputField,
            borderRadius: 20,
            paddingLeft: 15,
            height: 35,
          }}
          inputStyle={{
            color: Colors.textColor,
            paddingLeft: 10,
            fontSize: 14,
          }}
        />
        <Text text70 textColor>
          Top Searches
        </Text>
      </View>
      <FlashList
        // refreshing={loading}
        //onRefresh={() => fetchCoins()}
        data={searchResults}
        renderItem={({ item }) => (
          <SearchCoinItem key={item?.uuid} coin={item} />
        )}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default Search;
