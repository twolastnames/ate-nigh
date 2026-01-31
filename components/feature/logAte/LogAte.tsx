"use client";
import React, { useState } from "react";
import { Box, InputAdornment, Stack, styled, TextField } from "@mui/material";
import { LogAteTypes } from "./LogAteTypes";
import { spreadStack } from "@/components/styles";
import { Submit } from "@/components/ui/submit/Submit";
import { useAtePost } from "@/hooks/api";
import { ounces } from "@/util/units";
import { Stage } from "@/hooks/helpersTypes";

const Container = styled(Box)({});

export function LogAte(props: LogAteTypes) {
  const { post, stage } = useAtePost();
  const [amount, setAmount] = useState<string | undefined>();
  const error = !!amount && isNaN(Number(amount));
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
        {!!amount && !error && stage == Stage.IDLE && (
          <Submit
            onClick={() => {
              post({
                persistantId: Math.random(),
                amount: ounces(Number(amount)).asGrams(),
                nutrientId: props.id,
                time: new Date(),
              });
            }}
          />
        )}
      </Stack>
    </Container>
  );
}
