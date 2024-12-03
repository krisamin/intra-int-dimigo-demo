import { enableLegacyWebImplementation } from "react-native-gesture-handler";

enableLegacyWebImplementation(true);

interface ConfigProps {
  children: React.ReactNode;
}
const Config: React.FC<ConfigProps> = ({ children }) => {
  return children;
};

export { Config };
