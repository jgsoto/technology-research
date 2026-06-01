import { ThemeProviderContext } from "./context/ThemeContext";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <ThemeProviderContext>
      <AppRouter />
    </ThemeProviderContext>
  );
};