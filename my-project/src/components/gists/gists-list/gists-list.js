import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists, gistsSelector } from "../../../store/gists";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export const GistsList = () => {
  const { gists, gistsLoading, gistsError } = useSelector(gistsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (gistsError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>GistsList</h1>
      <hr />
      {buttons.map((button, index) => (
        <button onClick={() => dispatch(getGists(button))} key={index}>
          {button}
        </button>
      ))}
      {gistsLoading ? (
        <h1>Loading...</h1>
      ) : (
        gists.map((gist, index) => <p key={index}>{gist.url}</p>)
      )}
    </div>
  );
};
