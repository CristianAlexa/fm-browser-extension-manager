import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="p-4 bg-customNeutral-100 dark:bg-customNeutral-900 min-h-screen">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
