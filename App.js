import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScren";

import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";

import ColorScreen from "./src/screens/ColorScreen";
import SquareColorScreen from "./src/screens/SquareColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comonents:ComponentScreen,
    ListScreen:ListScreen,
    ImageScreen:ImageScreen,
    CounterScreen:CounterScreen,
  ColorScreen:ColorScreen,
  SquareColorScreen:SquareColorScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My  App",
    },
  }
);

export default createAppContainer(navigator);
