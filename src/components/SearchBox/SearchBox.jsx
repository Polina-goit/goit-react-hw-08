import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handelInputSearch = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.serchContainer}>
      <p className={css.textSearch}>Find contacts by name</p>
      <input type="text" onChange={handelInputSearch} />
    </div>
  );
};

export default SearchBox;
