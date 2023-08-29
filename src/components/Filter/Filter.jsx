import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "../../app.styled";
import { changeSearchQuery } from "../../redux/actions";

export default function Filter() {
  const { searchQuery } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeSearchQuery(e.target.value));
  };
  return (
    <Label>
      Find products by name 🔎
      <Input type="text" value={searchQuery} onChange={onChange} />
    </Label>
  );
}
