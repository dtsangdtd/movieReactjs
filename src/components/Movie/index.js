import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='col-md-3'>
        <div className='card' style={{ width: '18rem' }}>
          <img
            style={{ height: '18rem' }}
            className='card-img'
            src={movie.hinhAnh}
            alt='Card image cap'
          />
          <div className='card-body'>
            <h5 className='card-title'>{movie.tenPhim}</h5>

            <p className='card-text'>{movie.moTa}</p>

            <Link className='btn btn-success' to={`/detail/${movie.maPhim}`}>
              XEM
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
