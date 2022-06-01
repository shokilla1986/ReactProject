import { GistsList } from "./gists-list";
import { SearchGists } from "./search-gist";

export const Gists = () => {
  return (
    <div style={{ display: "flex" }}>
      <GistsList />
      <SearchGists />
    </div>
  );
};
