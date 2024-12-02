import { ThemeProvider } from "contexts/theme";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export { Provider };
