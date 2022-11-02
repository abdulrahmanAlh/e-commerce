import ThemeProvider from "theme";
import { AppRoutes } from "./Routes";
import { useAppSelector } from "core/store";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/lab";
import { disactiveAlert } from "utils/helpers/alert";

function App() {
  //Get snackbar changes
  const {
    alert: { message, severity, active },
  } = useAppSelector((state) => state.Setting);

  return (
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
  );
}

export default App;
