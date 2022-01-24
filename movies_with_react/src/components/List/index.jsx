import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        window.list = this;
    }

    getTimeFromMins = (mins) => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}:${minutes}`;
    };

    render() {
        const {movie} = this.props;

        return (
            <div className="movie">
                <div className="movie-image-container">
                    <a href="#"><img src={`../images/movies/${movie.id}.jpg`} /></a>
                </div>
                <a className="movie-title" href="#">{movie.title}</a>
                <table className="movie-details">
                    <tbody>
                        <tr>
                            <th>Год:</th>
                            <td>{movie.year}</td>
                        </tr>
                        <tr>
                            <th>Страна:</th>
                            <td>
                                {
                                    movie.countries.map((country, idx) => {
                                        return idx !== movie.countries.length-1 ? `${country}, ` : country;
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <th>Жанр:</th>
                            <td>
                                {
                                    movie.genre.map((genre, idx) => {
                                        return idx !== movie.genre.length-1 ? `${genre}, ` : genre;
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <th>Время:</th>
                            <td>{movie.time} мин. / {this.getTimeFromMins(movie.time)}</td>
                        </tr>
                        <tr>
                            <th>Рейтинг:</th>
                            <td>{movie.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="movie-plot">{movie.plot}</div>
            </div>
        );
    }
};

export default List;