import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import { Provider } from "./src";

AppRegistry.registerComponent(appName, () => Provider);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
