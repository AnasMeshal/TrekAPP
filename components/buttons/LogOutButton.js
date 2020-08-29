import React from "react";
import { LogOutStyled } from "./styles";
import authStore from "../../stores/authStore";
import { Alert } from "react-native";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import { observer } from "mobx-react";

const LogOutButton = () => {
  const navigation = useNavigation();
  //   const resetAction = NavigationActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({ routeName: "Home" })],
  //   });

  const submit = async () => {
    await authStore.signout();
    navigation.replace("Home");
  };

  return <LogOutStyled type="AntDesign" name="logout" onPress={submit} />;
};

export default observer(LogOutButton);
//   const handleLogOut = () => {
//     Alert.alert(
//       "Log Out",
//       "Are you sure you want to log out",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel",
//         },
//         {
//           text: "Log Out",
//           onPress: async () => {
//             navigation.popToTop("Home");
//             await authStore.signout();
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };
