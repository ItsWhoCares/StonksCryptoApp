import { View, Text, TextField as TF, Colors } from "react-native-ui-lib";
import React, { useState } from "react";

const TextField = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <TF
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
      fieldStyle={{
        ...props.fieldStyle,
        borderColor: focused ? Colors.primary : Colors.input,
      }}
    />
  );
};

export default TextField;
