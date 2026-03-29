"use client";
import { Eaten } from "@/components/feature/eaten/Eaten";
import { Nutrients } from "@/components/feature/nutrients/Nutrients";
import { DayPicker } from "@/components/ui/dayPicker/DayPicker";
import { useAtesGet } from "@/hooks/api";
import { fullPage } from "@/styles/stack";
import { Container } from "@mui/material";
import { useState } from "react";

const hoursBeforeBreak = 9;
const breakTime = hoursBeforeBreak * 3600000;
const oneDay = 86400000;

export default function Days() {
  const [now, setNow] = useState(new Date());
  const daysSinceEpoche = Math.floor(now.getTime() / oneDay) * oneDay;
  const breakAt = daysSinceEpoche + breakTime;
  const from = new Date(breakAt);
  const to = new Date(now);
  const foods = useAtesGet(
    {
      from,
      to,
    },
    {},
  );

  return (
    <Container sx={fullPage}>
      <DayPicker onChange={setNow} value={now} />
      <Eaten
        data={foods?.data || []}
        formatDate={(date: Date) => date.toLocaleTimeString()}
      />
      <Nutrients from={from} to={to} />
    </Container>
  );
}
