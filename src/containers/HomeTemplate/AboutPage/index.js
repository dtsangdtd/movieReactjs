import React, { useEffect } from 'react';
import Movie from '../../../components/Movie';
import Loader from '../../../components/Loader';
import { actListMovieAPI } from '../ListMoviePage/modules/action';
import { connect } from 'react-redux';
function AboutPage(props) {
  useEffect(() => {
    props.listMovieApi();
  }, []);

  const renderHTML = () => {
    const { ListMovie, loading } = props;
    if (loading) return <Loader />;
    //  vì bên reducers thiết kế  data :  null không phải là mảng nên ko thể .map được nên phải kiểm tra
    // nếu listmovie va list movie > 0 thi chay ham ben duoi
    if (ListMovie && ListMovie.length > 0) {
      return ListMovie.map((movie, index) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };
  return (
    <div className='container'>
      <div className='row'>{renderHTML()}</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.ListMovieReducer.loadding,
  ListMovie: state.ListMovieReducer.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
