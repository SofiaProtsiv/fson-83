import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";
import { useStateContext } from "../../context/StateContext";

export default function Search() {
  const { searchParams, setSearchParams } = useStateContext();

  const searchQuery = searchParams.get("query") || "";

  const handleInput = async (e) => {
    const value = e.target.value.trim();

    value ? setSearchParams({ query: e.target.value }) : setSearchParams({});
  };

  return (
    <Label>
      <Icon>
        <AiOutlineSearch />
      </Icon>
      <Input
        name="query"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInput}
      />
    </Label>
  );
}
