// ComponentsConfig.js

import { ThemeManager, Typography, Colors } from "react-native-ui-lib";

// with plain object
ThemeManager.setComponentTheme("Card", {
  borderRadius: 8,
});

// with a dynamic function
ThemeManager.setComponentTheme("Button", (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 0,
    };
  }
});

ThemeManager.setComponentForcedTheme("Text", (props) => {
  //console.log(props);
  return {
    style: [props.style],
  };
});
