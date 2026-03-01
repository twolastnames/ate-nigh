import { AteType } from "../../../types/db";

export type EatenTypes = {
  data: AteType[];
  formatDate?: (date: Date) => string;
};
