import { useEffect, useState } from "react";
import {
  DescriptionSearchTypes,
  ResponsePayload,
} from "./descriptionSearchTypes";
import { GetResponse, Stage } from "./helpersTypes";
import { descriptionIndex } from "@/util/helpers";

export function useDescriptionSearch(args: DescriptionSearchTypes) {
  const [result, setResult] = useState<GetResponse<ResponsePayload>>({
    stage: Stage.FETCHING,
  });

  useEffect(() => {
    (async () => {
      if ((args.query || "").length < 3) {
        return;
      }
      const response = await descriptionIndex.search(args.query);
      if (!Array.isArray(response?.hits)) {
        return;
      }
      setResult({
        stage: Stage.SUCCESS,
        data: response.hits as ResponsePayload,
      });
    })();
  }, [args.query]);
  return result;
}
