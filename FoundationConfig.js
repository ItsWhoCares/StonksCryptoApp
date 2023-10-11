// FoundationConfig.js
require("react-native-ui-lib/config").setConfig({ appScheme: "default" });

import { Colors, Typography, Spacings } from "react-native-ui-lib";

// Colors.loadColors({
//   primaryColor: "#2364AA",
//   secondaryColor: "#81C3D7",
//   textColor: "##221D23",
//   errorColor: "#E63B2E",
//   successColor: "#ADC76F",
//   warnColor: "##FF963C",
// });

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: "600" },
  subheading: { fontSize: 28, fontWeight: "500" },
  body: { fontSize: 18, fontWeight: "400" },
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

//Shadcn ui
// Colors.loadColors({
//   primaryBgColor: "hsl(20, 14.3%, 4.1%)",
//   secondaryBgColor: "hsl(24, 9.8%, 10%)",
//   primaryColor: "#16a34a",
//   bgColor: "#1c1917",
//   //primaryColor: "#ebebeb",
//   secondaryColor: "#09090b",
//   //secondaryColor: "#09090b",
//   textColor: "hsl(0, 0%, 95%)",
//   secondaryTextColor: "#a1a1aa",
//   errorColor: "#E63B2E",
//   successColor: "#ADC76F",
//   warnColor: "##FF963C",
//   main: "#16a34a",
//   //   //   main: "#24b47e",
// });

Colors.loadColors({
  background: "hsl(20, 14.3%, 4.1%)",
  foreground: "hsl(0, 0%, 95%)", //primary text color
  muted: "hsl(0, 0%, 15%)",
  mutedForeground: "hsl(240, 5%, 64.9%)", //secondary text color
  card: "hsl(24, 9.8%, 10%)", //primary bg color
  cardForeground: "hsl(0, 0%, 95%)",
  input: "hsl(240, 3.7%, 15.9%)", //border color
  primaryForeground: "hsl(144.9, 80.4%, 10%)", //text inside primary btn
  accent: "hsl(12, 6.5%, 15.1%)",
  primaryBgColor: "hsl(20, 14.3%, 4.1%)",
  secondaryBgColor: "hsl(24, 9.8%, 10%)",
  primaryColor: "#16a34a",
  bgColor: "#1c1917",
  //primaryColor: "#ebebeb",
  secondaryColor: "#09090b",
  //secondaryColor: "#09090b",
  textColor: "hsl(0, 0%, 95%)",
  secondaryTextColor: "#a1a1aa",
  errorColor: "#E63B2E",
  successColor: "#ADC76F",
  warnColor: "##FF963C",
  main: "#16a34a",
  //   //   main: "#24b47e",
});

// Colors.loadSchemes({
//   light: {
//     screenBG: "transparent",
//     textColor: Colors.grey10,
//     moonOrSun: Colors.yellow30,
//     main: "#000",
//     mountainForeground: Colors.green30,
//     mountainBackground: Colors.green50,
//     $backgroundSuccess: Colors.green40,
//     $backgroundSuccessLight: Colors.green70,
//   },
//   dark: {
//     screenBG: Colors.grey10,
//     textColor: Colors.white,
//     moonOrSun: Colors.grey80,
//     main: "#fff",
//     mountainForeground: Colors.violet10,
//     mountainBackground: Colors.violet20,
//     $backgroundSuccess: Colors.green40,
//     $backgroundSuccessLight: Colors.green20,
//   },
// });
