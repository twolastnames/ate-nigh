"use client";
import React, { useMemo } from "react";
import { Box, styled, Button, Stack, Typography } from "@mui/material";
import { DayPickerTypes } from "./DayPickerTypes";
import debounce from "lodash/debounce";

const Container = styled(Box)({});

const DAY_MS = 24 * 60 * 60 * 1000;

const formatDate = (todayStart: Date, date: Date) => {
  if (date.getTime() === todayStart.getTime()) {
    return "Today";
  }

  const yesterday = new Date(todayStart.getTime() - DAY_MS);
  if (date.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: date < oneYearAgo ? "numeric" : undefined,
  };

  return date.toLocaleDateString("en-US", options);
};

function getStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function DayPicker(props: DayPickerTypes) {
  const givenStart = getStart(props.value);
  const todayStart = getStart(new Date());

  const onChange = useMemo(
    () =>
      debounce((date: Date) => props.onChange(date), 250, { leading: true }),
    [props],
  );

  const handlePrevDay = () => {
    const newDate = new Date(props.value.getTime() - DAY_MS);
    onChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(props.value.getTime() + DAY_MS);
    onChange(newDate);
  };

  return (
    <Container data-testid="DayPicker">
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={handlePrevDay}>&lt;</Button>
        <Typography variant="body1" sx={{ minWidth: 120, textAlign: "center" }}>
          {formatDate(todayStart, givenStart)}
        </Typography>
        <Button
          onClick={handleNextDay}
          disabled={props.value.getTime() >= todayStart.getTime()}
        >
          &gt;
        </Button>
      </Stack>
    </Container>
  );
}
