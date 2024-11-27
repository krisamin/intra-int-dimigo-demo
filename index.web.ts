import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import { Root } from "./src";

AppRegistry.registerComponent(appName, () => Root);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
