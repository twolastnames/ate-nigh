"use client";
import React, { useState } from "react";
import { Box, InputAdornment, Stack, styled, TextField } from "@mui/material";
import { LogAteTypes } from "./LogAteTypes";
import { spreadStack } from "@/components/styles";
import { Submit } from "@/components/ui/submit/Submit";

const Container = styled(Box)({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LogAte(props: LogAteTypes) {
  const [amount, setAmount] = useState<string | undefined>();
  const error = !!amount && isNaN(Number(amount));
  const post = () => {
    console.log("posteddddd");
  };
  console.log("eeee", { error, amount });
  return (
    <Container data-testid="LogAte">
      <Stack direction="row" sx={spreadStack}>
        <TextField
          onChange={(event) => {
            setAmount(event?.target?.value);
          }}
          label="Amount"
          error={error}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">oz</InputAdornment>,
            },
          }}
        />
        {!!amount && !error && <Submit onClick={post} />}
      </Stack>
    </Container>
  );
}
