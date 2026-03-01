"use client";
import { DayPicker } from "@/components/ui/dayPicker/DayPicker";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { useAtesGet, useNutrientsGet } from "@/hooks/api";
import { Box, styled } from "@mui/material";
import { useState } from "react";

const hoursBeforeBreak = 9;
const breakTime = hoursBeforeBreak * 3600000;
const oneDay = 86400000;

const Container = styled(Box)({});

export default function Days() {
  const [now, setNow] = useState(new Date());
  const daysSinceEpoche = Math.floor(now.getTime() / oneDay) * oneDay;
  const breakAt = daysSinceEpoche + breakTime;
  const foods = useAtesGet(
    {
      from: new Date(breakAt),
      to: new Date(now),
    },
    {},
  );
  const nutrients = useNutrientsGet({
    from: new Date(breakAt),
    to: new Date(now),
  });

  return (
    <Container>
      <DayPicker onChange={setNow} value={now} />
      <div>now : {now.getTime()}</div>
      <div>Days since epoche: {daysSinceEpoche}</div>
      <div>Break At: {breakAt}</div>
      <div>
        <Spinner responses={[foods, nutrients]}>
          <pre>{JSON.stringify(foods.data, null, 4)}</pre>
          <pre>{JSON.stringify(nutrients.data, null, 4)}</pre>
        </Spinner>
      </div>
    </Container>
  );
}
