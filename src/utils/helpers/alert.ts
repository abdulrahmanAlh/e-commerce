import { store } from "core/store";
import { closeAlert, openAlert } from "core/redux/setting";
import { AlertSetting } from "types";

export function activeAlert(alert: AlertSetting) {
  store.dispatch(openAlert(alert));
}
export function disactiveAlert() {
  store.dispatch(closeAlert());
}
