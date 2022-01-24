import React from 'react';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        window.tiles = this;
    }

    render() {
        const {movie, togglePopUp} = this.props;

        return (
            <>
                <div className="movie" data-id={movie.id} onClick={togglePopUp}>
                    <div className="movie-image-container">
                        <a href="#">
                            <img src={`../images/movies/${movie.id}.jpg`} />
                        </a>
                    </div>
                    <a className="movie-title" href="#">{movie.title}</a>
                    <div className="movie-details"><span>{movie.year}</span></div>
                </div>
            </>
        );
    }
};

export default Tiles;