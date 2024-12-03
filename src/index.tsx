import { Navigation } from "navigations";
import { Provider } from "provider";

const App = () => {
  return (
    <Provider>
      <Navigation
        linking={{
          enabled: "auto",
          prefixes: ["http://localhost:8080"],
        }}
      />
    </Provider>
  );
};

export { App };
