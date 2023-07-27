import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";

export default function Search({ searchQuery, handleChange }) {
  return (
    <Label>
      <Icon>
        <AiOutlineSearch />
      </Icon>
      <Input
        name="query"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Label>
  );
}
