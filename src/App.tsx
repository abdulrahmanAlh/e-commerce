import ThemeProvider from "theme";
import { AppRoutes } from "./Routes";
import { Provider } from "react-redux";
import { store } from "core/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
