export interface SelectedItem {
  id: number;
  name: string;
}

export type Status = "loading" | "success" | "error" | "empty";

export interface Item {
  id: number;
  name: string;
  episode?: [];
  image?: string;
}
