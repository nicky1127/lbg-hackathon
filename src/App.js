import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dashboard from "./components/pages/Dashboard";
import theme from "./themeCreator";

// const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
