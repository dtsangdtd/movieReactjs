import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../components/Loader';
import { actDetailPageAPI } from './modules/actions';

class DetailPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.getDetailMovie(id);
  }
  renderTable = () => {
    const { data } = this.props;
    console.log(data);
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>
              <button className='btn btn-primary'>Booking</button>
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    const { loadding, data } = this.props;
    if (loadding) {
      return <Loader />;
    }
    return (
      <div className='container'>
        <h3>Detai Page</h3>
        <div className='row'>
          <div className='col-md-6'>
            <img src={data && data.hinhAnh} alt=''></img>
          </div>
          <div className='col-md-6'>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Cum Rap</th>
                  <th>Ten Rap</th>
                  <th>Gio Chieu</th>
                  <th>Ngay Chieu</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loadding: state.DetailMovieReducer.loadding,
    data: state.DetailMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getDetailMovie: (id) => {
    dispatch(actDetailPageAPI(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
