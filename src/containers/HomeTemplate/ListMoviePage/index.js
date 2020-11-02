import React, { Component } from 'react';
import Axios from 'axios';
import Movie from '../../../components/Movie';
import { connect } from 'react-redux';
import { actListMovieAPI } from './modules/action';
import Loader from '../../../components/Loader';

class ListMoviePage extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   listMovie: [],
  //   loading: false,
  // };
  // }
  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
    /*   this.props.listMovieRequest();
    Axios({
      url:
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10',
      method: 'GET',
    })
      .then((result) => {
        console.log(result.data);
        this.props.listMovieSuccess(result.data);
        */
    // this.props.dispatch({
    //   type: 'FETCH_MOVIE',
    //   payload: result.data,
    // });
    // this.setState({
    //   listMovie: result.data,
    //   loading: false,
    // });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.props.listMovieFailed(err);
    //     });
    this.props.listMovieApi();
  }
  renderHTML = () => {
    const { ListMovie } = this.props;
    //  vì bên reducers thiết kế  data :  null không phải là mảng nên ko thể .map được nên phải kiểm tra
    // nếu listmovie va list movie > 0 thi chay ham ben duoi
    if (ListMovie && ListMovie.length > 0) {
      return ListMovie.map((movie, index) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };
  render() {
    const { loadding } = this.props;
    if (loadding) {
      return <Loader />;
    }
    return (
      <div>
        <h1>List Movie Page</h1>
        <div className='container'>
          <div className='row'>{this.renderHTML()}</div>
        </div>
      </div>
    );
  }
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
    // listMovieRequest: () => {
    //   dispatch(actListMovieRequest());
    // },
    // listMovieSuccess: (data) => {
    //   dispatch(actListMovieSuccess(data));
    // },
    // listMovieFailed: (err) => {
    //   dispatch(actListMovieFailed(err));
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
