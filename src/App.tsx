import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { ThemeContextProvider } from "./contexts/theme-context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
