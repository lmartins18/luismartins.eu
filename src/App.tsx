import "./App.css";
import { Header } from "./components/Header";
import { MainBody } from "./components/MainBody";
import { ThemeContextProvider } from "./contexts/theme-context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <MainBody />
    </ThemeContextProvider>
  );
}

export default App;
