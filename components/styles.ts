import { SxProps } from "@mui/material";

export enum Size {
  Small,
  Medium,
  Large,
}

export const rowish: SxProps = {
  height: 54,
};

export const section = {
  borderColor: "primary.main",
  borderRadius: 4,
  border: 1,
  padding: 4,
};

export const spreadStack: SxProps = {
  justifyContent: "space-between",
};

export const paddings: { [name: string]: SxProps } = {
  [Size.Small]: {
    padding: "4px",
  },
  [Size.Medium]: {
    padding: "8px",
  },
  [Size.Large]: {
    padding: "16px",
  },
};
