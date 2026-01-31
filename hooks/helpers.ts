"use client";
import {
  GetOptions,
  GetResponse,
  GetResponseInformation,
  PostResponse,
  Stage,
} from "./helpersTypes";
import { useEffect, useState } from "react";

type Stringable = { toString: () => string };

function getStage(code: number): Stage {
  return isNaN(code)
    ? Stage.ERROR
    : code >= 200 && code < 300
      ? Stage.SUCCESS
      : Stage.ERROR;
}

export function useBaseGet<PAYLOAD, ARGS extends { [arg: string]: Stringable }>(
  path: string,
  args: ARGS,
  options?: GetOptions,
): GetResponse<PAYLOAD> {
  const [state, setState] = useState<GetResponse<PAYLOAD>>({
    stage: Stage.IDLE,
  });

  const holdCall = options?.holdCall() || false;
  useEffect(() => {
    if (holdCall) {
      return;
    }
    (async () => {
      const paramaters = Object.entries(args)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              value.toString(),
            )}`,
        )
        .join("&");
      setState({
        ...state,
        stage: Stage.FETCHING,
      });
      const response = await fetch(
        `${path}${paramaters ? "?" : ""}${paramaters}`,
      );
      setState({
        ...(await response.json()),
        code: Number(response.status),
        stage: getStage(response.status),
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(args), path, holdCall]);
  return state;
}

export function useBasePost<BODY>(path: string): PostResponse<BODY> {
  const [state, setState] = useState<GetResponseInformation & { id?: string }>({
    stage: Stage.IDLE,
  });
  const post = async (body: BODY) => {
    setState({
      ...state,
      stage: Stage.FETCHING,
    });
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
    setState({
      code: Number(response.status),
      stage: getStage(response.status),
    });
  };
  return {
    ...state,
    post,
  };
}
