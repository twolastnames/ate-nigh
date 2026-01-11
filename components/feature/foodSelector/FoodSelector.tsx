"use client";
import React, { useMemo, useState } from "react";
import { Autocomplete, Box, debounce, styled, TextField } from "@mui/material";
import { FoodSelectorTypes } from "./FoodSelectorTypes";
import { useDescriptionSearch } from "../../../hooks/descriptionSearch";

const Container = styled(Box)({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FoodSelector(props: FoodSelectorTypes) {
  const [query, setQuery] = useState<string>("");
  const response = useDescriptionSearch({ query });
  const changeQuery = useMemo(() => debounce(setQuery, 500), []);

  return (
    <Container data-testid="FoodSelector">
      <Autocomplete
        options={
          response.data?.map(({ description, id }) => ({
            label: description,
            id,
          })) || []
        }
        onChange={(event, selection) => {
          if (!selection?.id) {
            return;
          }
          props.onChange(selection.id);
        }}
        renderInput={(params) => {
          if ((params.inputProps?.value?.toString() || "").length > 2) {
            changeQuery(params.inputProps?.value?.toString() || "");
          }
          return <TextField {...params} />;
        }}
      />
    </Container>
  );
}
