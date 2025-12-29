import { GetResponseInformation } from "@/hooks/helpersTypes";
import { PropsWithChildren } from "react";

export type SpinnerTypes = PropsWithChildren & {
  responses: Array<GetResponseInformation>;
};
