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

// console.log(Typography);

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: "600" },
  subheading: { fontSize: 28, fontWeight: "500" },
  body: {
    fontFamily: "CustomFontM",
  },
  text90: {
    fontFamily: "CustomFontM",
    fontSize: 12,
  },
  text100: {
    fontFamily: "CustomFontM",
    fontSize: 10,

    fontWeight: "300",
  },
  text50: {
    ...Typography.text50,
    fontFamily: "CustomFontB",
  },

  text70: {
    ...Typography.text70,
    fontFamily: "CustomFontB",
  },

  textThin: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "CustomFontR",
    fontWeight: "100",
  },

  textThick: {
    fontSize: 16,
    fontFamily: "CustomFontB",
    fontWeight: "normal",
  },

  text12M: {
    fontSize: 12,
    fontFamily: "CustomFontM",
    fontWeight: "normal",
  },

  text26M: {
    fontSize: 26,
    fontFamily: "CustomFontM",
    fontWeight: "normal",
  },
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

// Colors.loadColors({
//   background: "hsl(20, 14.3%, 4.1%)",
//   foreground: "hsl(0, 0%, 95%)", //primary text color
//   muted: "hsl(0, 0%, 15%)",
//   mutedForeground: "hsl(240, 5%, 64.9%)", //secondary text color
//   card: "hsl(24, 9.8%, 10%)", //primary bg color
//   cardForeground: "hsl(0, 0%, 95%)",
//   input: "hsl(240, 3.7%, 15.9%)", //border color
//   primaryForeground: "hsl(144.9, 80.4%, 10%)", //text inside primary btn
//   accent: "hsl(12, 6.5%, 15.1%)",
//   primaryBgColor: "hsl(20, 14.3%, 4.1%)",
//   secondaryBgColor: "hsl(24, 9.8%, 10%)",
//   primary: "#16a34a",
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

//binance scheme
// Colors.loadColors({
//   background: "hsl(215, 22%, 15%)",
//   foreground: "hsl(0, 0%, 95%)", //primary text color
//   muted: "hsl(0, 0%, 15%)",
//   mutedForeground: "hsl(240, 5%, 64.9%)", //secondary text color
//   card: "hsl(215, 22%, 15%)", //primary bg color
//   cardForeground: "hsl(0, 0%, 95%)",
//   input: "rgb(71, 77, 87)", //border color
//   primaryForeground: "hsl(144.9, 80.4%, 10%)", //text inside primary btn
//   accent: "hsl(12, 6.5%, 15.1%)",
//   primaryBg: "hsl(20, 14.3%, 4.1%)",
//   secondaryBgColor: "hsl(24, 9.8%, 10%)",
//   primary: "#F0B90B",
//   bgColor: "#1c1917",
//   //primaryColor: "#ebebeb",
//   secondaryColor: "#09090b",
//   //secondaryColor: "#09090b",
//   textColor: "hsl(0, 0%, 95%)",
//   mutedText: "hsl(219, 10%, 49%)",
//   secondaryTextColor: "#a1a1aa",
//   errorColor: "#E63B2E",
//   successColor: "#ADC76F",
//   warnColor: "##FF963C",
//   main: "hsl(49, 91%, 49%)",
//   //   //   main: "#24b47e",
// });

Colors.loadColors({
  $backgroundPrimary: "#202630",
  $backgroundNeutral: "#434C5A",
  $IconPrimaryLight: "#FCD535",
  $IconPrimaryHeavy: "#F0B90B",
  $primaryHeavy: "#F0B90B",
  $primaryLight: "#FCD535",
  $textDefault: "#EAECEF",
  $textNeutral: "#707A8A",
  $textSuccess: "#2EBD85",
  $textDanger: "#F6465D",
});
Colors.loadColors({
  background: "#202630",
  primary: "#F0B90B",
  secondary: "#FCD535",
  mutedBackground: "#434C5A",
  mutedShadow: "#3c4453",
  textColor: "#EAECEF",
  textMuted: "#848E9C",
  positive: "#2EBD85",
  negative: "#F6465D",
  mutedIcon: "#707A8A",
  input: "rgb(71, 77, 87)", //border color
  inputField: "#29313C",
});

// Colors.loadSchemes({
//   light: {
//     screenBG: "transparent",
//     textColor: Colors.grey10,
//     moonOrSun: Colors.yellow30,
//     mountainForeground: Colors.green30,
//     mountainBackground: Colors.green50,
//     $backgroundSuccess: Colors.green40,
//     $backgroundSuccessLight: Colors.green70,
//   },
//   dark: {
//     screenBG: Colors.grey10,
//     textColor: Colors.white,
//     moonOrSun: Colors.grey80,
//     mountainForeground: Colors.violet10,
//     mountainBackground: Colors.violet20,
//     $backgroundSuccess: Colors.green40,
//     $backgroundSuccessLight: Colors.green20,
//   },
// });
