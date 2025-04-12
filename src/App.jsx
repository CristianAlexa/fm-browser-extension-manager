import Header from "./components/Header";
import Main from "./components/Main";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="p-4 bg-customNeutral-100 dark:bg-customNeutral-900 min-h-screen">
        <Header />
        <DataProvider>
          <Main />
        </DataProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
