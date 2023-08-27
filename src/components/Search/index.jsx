import { useStateContext } from "../../context";

const Search = () => {
  const { searchParams, setSearchParams } = useStateContext();

  const handleInput = (e) => {
    !e.target.value.trim()
      ? setSearchParams({})
      : setSearchParams({ query: e.target.value });
  };

  const searchQuery = searchParams.get("query") || "";
  return (
    <form>
      <input type="text" value={searchQuery} onChange={handleInput} />
      <button>Search</button>
    </form>
  );
};

export default Search;
