import {
  getGistsStart,
  getGistsError,
  getGistsSuccess,
  searchGistsError,
  searchGistsStart,
  searchGistsSuccess,
} from "./action";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsStart());

      const { data } = await api.getGistsApi(page);
      dispatch(getGistsSuccess(data));
    } catch (error) {
      dispatch(getGistsError(error));
    }
  };

export const searchGistsByUserName = (name) => async (dispatch, _, api) => {
  try {
    dispatch(searchGistsStart());

    const { data } = await api.searchGistsByName(name);
    dispatch(searchGistsSuccess(data));
  } catch (error) {
    dispatch(searchGistsError(error));
  }
};
