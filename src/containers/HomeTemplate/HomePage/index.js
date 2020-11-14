import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Movie from '../../../components/Movie';
import Loader from '../../../components/Loader';
function HomePage() {
  const [state, setState] = useState({ ListMovie: [], loading: false });
  useEffect(() => {
    setState({ ...state, loading: true });
    Axios({
      url:
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
    })
      .then((result) => {
        console.log(result.data);
        setState({ ...state, ListMovie: result.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderHTML = () => {
    const { ListMovie, loading } = state;
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

export default HomePage;
