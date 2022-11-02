export * from "./product";

export type Maybe<T> = T | null;
export interface AlertSetting {
  active?: boolean;
  severity: "error" | "warning" | "success" | "info";
  message: string;
}
