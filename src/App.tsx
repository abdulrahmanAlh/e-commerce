import ThemeProvider from "theme";
import { AppRoutes } from "./Routes";
import { Provider } from "react-redux";
import { store, useAppSelector } from "core/store";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/lab";
import { disactiveAlert } from "utils/helpers/alert";

function App() {
  const {
    alert: { message, severity, active },
  } = useAppSelector((state) => state.Setting);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={active}
          autoHideDuration={4000}
          onClose={disactiveAlert}
        >
          <Alert
            onClose={disactiveAlert}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
