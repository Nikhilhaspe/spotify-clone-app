export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // TODO: REMOVE IN PRODUCTION MODE
  token:
    "BQDRS2DLh410Afc3wnTzkUf4jJU0IwKBfdfFi_Q3dLhvSy5GAdCHhsoSGzbc1SYBCWFQ27DrOILWb5nV0os40kY_OUdTnba5zdYt22NDHRNpOQi28Y3ySXCA2gMh2NlyOq-eh8sNewWKlln6-H4WdUC4UpIKYLvwsZHBkMNb9fIimsH5JKe4uWk7oVwG9GbXD82UpR7BEO9rhxJkSeY9",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
