export enum Stage {
    FETCHING,
    SUCCESS,
    ERROR,
}

export type GetResponse<PAYLOAD> = {
    code?: number;
    stage: Stage;
    data?: PAYLOAD;
    error?: string;
}
