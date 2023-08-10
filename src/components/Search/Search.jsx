import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";
import { Context } from "../../contex/stateContext";

export default function Search() {
  const { searchQuery, setSearchQuery } = useContext(Context);

  const handleInput = ({ target }) => {
    setSearchQuery(target.value);
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
