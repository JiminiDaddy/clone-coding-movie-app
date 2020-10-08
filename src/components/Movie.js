import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

// Movie Component는 state가 필요하지 않으므로 class-component가 아니라 function-component로 구현
// 클릭 시 상세페이지 이동을 위해 react-router-dom의 Link 사용
// Detail-Component로 router-props를 전달할 수 있으므로, 영화정보를 전달한다.
const Movie = ({year, title, summary, poster, genres}) => {
    return (
        <div className="movie">
            <Link to={{ 
                pathname: '/movie-detail', 
                state: { year, title, summary, poster, genres }
            }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <h5 className="movie__year">{year}</h5>
                    <h5>Genres</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li clsssName="movie__genre" key={index} > {genre} </li>
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    <hr />
                </div>
            </Link>
        </div>
    );
}

// Movie로 넘어와야 하는 영화 데이터를 처리하기위해 외부로부터 파라미터를 받아야한다. 따라서 props 사용 
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;