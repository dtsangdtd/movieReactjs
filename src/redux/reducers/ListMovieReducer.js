const initialState = {
  ListMovie: [],
};
const ListMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'FETCH_MOVIE':
      state.ListMovie = actions.payload;
      return { ...state };
    default:
      return state;
  }
};
export default ListMovieReducer;
