import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchGistsByUserName, gistsSelector } from "../../../store/gists";

export const SearchGists = () => {
  const { gistsSearch, gistsLoadingSearch, gistsErrorSearch } =
    useSelector(gistsSelector);

  const dispatch = useDispatch();
  let [name, setName] = useState("");
  let [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
  };
  const searchName = useCallback(() => {
    setName(value);
  }, [value]);

  const pressInput = ({ code }) => {
    if (code === "Enter") {
      searchName();
      setValue("");
    }
  };

  useEffect(() => {
    // dispatch(searchGistsByUserName("bogdanq"));
    dispatch(searchGistsByUserName(name || "bogdanq"));
  }, [dispatch, name]);

  if (gistsErrorSearch) {
    return <h1>gistsErrorSearch</h1>;
  }

  return (
    <div>
      <h1>Search Gists</h1>
      <hr />
      <input
        placeholder="enter name..."
        value={value}
        onChange={changeValue}
        onKeyPress={pressInput}
      />
      {gistsLoadingSearch ? (
        <h1>Loading...</h1>
      ) : (
        gistsSearch.map((gist, index) => <p key={index}>{gist.url}</p>)
      )}
    </div>
  );
};
