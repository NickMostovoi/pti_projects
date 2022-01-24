import React from 'react';

import List from '../List';
import Tiles from '../Tiles';

class App extends React.Component {
    constructor(props) {
        super(props);
        window.app = this;
    };

    state = {
        movies: JSON.parse(localStorage.getItem('movies')) || [],
        viewType: 'movies state-tiles',
        viewTypeActive: 'tiles',
        showPopUp: false,
        popUpId: null,
        searchingText: '',
        sortValue: '',
        activePagePagination: 1,
        moviesPerPage: JSON.parse(localStorage.getItem('movies')).length,
        showUsaMovies: false,
        showUssrMovies: false,
        showGBMovies: false,
        showActionMovies: false,
        showComedyMovies: false,
        showCrimeMovies: false,
        usaMoviesCounter: 0,
        ussrMoviesCounter: 0,
        gBMoviesCounter: 0,
        actionMoviesCounter: 0,
        comedyMoviesCounter: 0,
        crimeMoviesCounter: 0,
    };

    viewTypeButtons = [
        {viewType: 'list', title: 'Списком'},
        {viewType: 'tiles', title: 'Плитками'}
    ];

    buttonsPaginations = [
        {page: 1},
        {page: 2},
        {page: 3},
        {page: 4},
        {page: 5}
    ];

    togglePopUp = (e) => {
        this.setState((state) => ({
            showPopUp: !state.showPopUp,
            popUpId: e.target.classList.contains('close') ? null : e.target.closest('.movie').dataset.id
        }));
    };

    onChangeviewType = (e) => {
        let target = e.target.dataset.viewType;

        this.setState({
            viewType: target === 'tiles' ? 'movies state-tiles' : 'movies state-list',
            viewTypeActive: target
        });
    };

    handleChangeOnSearch = (e) => {
        this.setState({
            searchingText: e.target.value
        });
    };

    getFilteredMovies = () => {
        let searchingText = this.state.searchingText;
        let showUsaMovies = this.state.showUsaMovies;
        let showUssrMovies = this.state.showUssrMovies;
        let showGBMovies = this.state.showGBMovies;
        let showActionMovies = this.state.showActionMovies;
        let showComedyMovies = this.state.showComedyMovies;
        let showCrimeMovies = this.state.showCrimeMovies;
        let sortValue = this.state.sortValue;
        let startOfPagination = this.state.moviesPerPage * (this.state.activePagePagination - 1);
        let endOfPagination = (this.state.moviesPerPage * this.state.activePagePagination);

        return this.state.movies
            .filter(function(movie) {
                return movie.title.includes(searchingText);
            })
            .filter(function(movie) {
                let usa = showUsaMovies ? movie.countries.includes('США') : null;
                let ussr = showUssrMovies ? movie.countries.includes('СССР') : null;
                let greatBritain = showGBMovies ? movie.countries.includes('Великобритания') : null;
                let allMovies = (showUsaMovies || showUssrMovies || showGBMovies) === false ? movie : null;

                return usa + ussr + greatBritain + allMovies;
            })
            .filter(function(movie) {
                let actionMovies = showActionMovies ? movie.genre.includes('боевик') : null;
                let comedyMovies = showComedyMovies ? movie.genre.includes('комедия') : null;
                let crimeMovies = showCrimeMovies ? movie.genre.includes('криминал') : null;
                let allGenres = (showActionMovies || showComedyMovies || showCrimeMovies) === false ? movie : null;

                return actionMovies + comedyMovies + crimeMovies + allGenres;
            })
            .sort(function(a, b){
                if (sortValue === 'ascending_title') {
                    let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
                    if (titleA < titleB) return -1;
                    if (titleA > titleB) return 1;
                    return 0;
                }
                if (sortValue === 'descending_title') {
                    let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
                    if (titleA > titleB) return -1;
                    if (titleA < titleB) return 1;
                    return 0;
                }
                if (sortValue === 'ascending_rating') {
                    return b.rating - a.rating;
                }
                if (sortValue === 'descending_rating') {
                    return a.rating - b.rating;
                }
                if (sortValue === 'ascending_year') {
                    return b.year - a.year;
                }
                if (sortValue === 'descending_year') {
                    return a.year - b.year;
                }
                if (sortValue === 'ascending_time') {
                    return b.time - a.time;
                }
                if (sortValue === 'descending_time') {
                    return a.time - b.time;
                }
            })
            .slice(startOfPagination, endOfPagination)
    };

    onSort = (e) => {
        this.setState({
            sortValue: e.target.value
        });
    };

    onfilterByGenre = (e) => {
        this.setState((state) => ({
            showActionMovies: e.target.value === 'боевик' ? !state.showActionMovies : state.showActionMovies,
            showComedyMovies: e.target.value === 'комедия' ? !state.showComedyMovies : state.showComedyMovies,
            showCrimeMovies: e.target.value === 'криминал' ? !state.showCrimeMovies : state.showCrimeMovies
        }));
    };

    onfilterByCountry = (e) => {
        this.setState((state) => ({
            showUsaMovies: e.target.value === 'США' ? !state.showUsaMovies : state.showUsaMovies,
            showUssrMovies: e.target.value === 'СССР' ? !state.showUssrMovies : state.showUssrMovies,
            showGBMovies: e.target.value === 'Великобритания' ? !state.showGBMovies : state.showGBMovies
        }));
    };

    onPagination = (e) => {
        this.setState({
            activePagePagination: e.target.innerHTML
        });
    };

    onMoviesPerPage = (e) => {
        this.setState((state) => ({
            moviesPerPage: e.target.value !== 'default' ? e.target.value : state.movies.length
        }));
    };

    counter = () => {
        this.setState((state) => ({
            usaMoviesCounter: state.movies.filter(function(movie) {return movie.countries.includes('США')}).length,
            ussrMoviesCounter: state.movies.filter(function(movie) {return movie.countries.includes('СССР')}).length,
            gBMoviesCounter: state.movies.filter(function(movie) {return movie.countries.includes('Великобритания')}).length,
            actionMoviesCounter: state.movies.filter(function(movie) {return movie.genre.includes('боевик')}).length,
            comedyMoviesCounter: state.movies.filter(function(movie) {return movie.genre.includes('комедия')}).length,
            crimeMoviesCounter: state.movies.filter(function(movie) {return movie.genre.includes('криминал')}).length
        }));
    };

    data = () => {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'http://127.0.0.1:3001/movies');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === 4) {
                xhr.status === 200 ? localStorage.setItem('movies', JSON.stringify(JSON.parse(xhr.responseText))) : console.log('error');
            }
        });
        xhr.send();
    };

    componentDidMount() {
        this.data();
        this.counter();
    };

    render() {
        const {getFilteredMovies, onChangeviewType, viewTypeButtons, togglePopUp, handleChangeOnSearch, onfilterByCountry, onfilterByGenre, onSort, onPagination, onMoviesPerPage, buttonsPaginations} = this;
        const {movies, viewType, viewTypeActive, popUpId, showPopUp, searchingText, activePagePagination, usaMoviesCounter, ussrMoviesCounter, gBMoviesCounter, actionMoviesCounter, comedyMoviesCounter, crimeMoviesCounter} = this.state;

        return (
            <div className="app">
                <div className="top-bar">
                    <div className="search">
                        Поиск:
                        <input type="text" value={searchingText} onChange={handleChangeOnSearch} />
                    </div>

                    <div className="items-per-page" onClick={onMoviesPerPage}>
                        На странице:
                        <select>
                            <option value="default">все фильмы</option>
                            <option value="6">по 6 фильмов</option>
                            <option value="12">по 12 фильмов</option>
                            <option value="18">по 18 фильмов</option>
                        </select>
                    </div>

                    <div className="sort" onClick={onSort}>
                        Сортировать:
                        <select>
                            <option value="default">по умолчанию</option>
                            <option value="ascending_title">по алфавиту &uarr;</option>
                            <option value="descending_title">по алфавиту &darr;</option>
                            <option value="ascending_rating">по рейтингу &uarr;</option>
                            <option value="descending_rating">по рейтингу &darr;</option>
                            <option value="ascending_year">по году &uarr;</option>
                            <option value="descending_year">по году &darr;</option>
                            <option value="ascending_time">по длительности &uarr;</option>
                            <option value="descending_time">по длительности &darr;</option>
                        </select>
                    </div>

                    <div className="view-type" onClick={onChangeviewType}>
                        Отображать:
                        {
                            viewTypeButtons.map((button, idx) => {
                                const className = viewTypeActive === button.viewType ? 'active' : null;
                                return <button key={button.viewType} data-view-type={button.viewType} className={className}>{button.title}</button>;
                            })
                        }
                    </div>
                </div>

                <div className="filters">
                    <h4>Фильтры</h4>

                    <div className="countries" onClick={onfilterByCountry}>
                        Страна:

                        <input type="checkbox" value="США" id="usa" />
                        <label htmlFor="usa">США ({usaMoviesCounter})</label>

                        <input type="checkbox" value="СССР" id="ussr" />
                        <label htmlFor="ussr">СССР ({ussrMoviesCounter})</label>

                        <input type="checkbox" value="Великобритания" id="greatBritain" />
                        <label htmlFor="greatBritain">Великобритания ({gBMoviesCounter})</label>
                    </div>

                    <div className="genres" onClick={onfilterByGenre}>
                        Жанр:

                        <input type="checkbox" value="боевик" id="actionMovies" />
                        <label htmlFor="actionMovies">боевик ({actionMoviesCounter})</label>

                        <input type="checkbox" value="комедия" id="comedyMovies" />
                        <label htmlFor="comedyMovies">комедия ({comedyMoviesCounter})</label>

                        <input type="checkbox" value="криминал" id="crimeMovies" />
                        <label htmlFor="crimeMovies">криминал ({crimeMoviesCounter})</label>
                    </div>
                </div>

                <div className="pagination">
                    {
                        buttonsPaginations.map((button, idx) => {
                            const className = +activePagePagination === button.page ? 'active' : null;
                            return <button key={button.page} className={className} onClick={onPagination}>{button.page}</button>;
                        })
                    }
                </div>

                <div className={viewType}>
                    {
                        viewType === 'movies state-tiles' ?
                            getFilteredMovies().map((movie, idx) => {
                                return <Tiles key={movie.id} movie={movie} togglePopUp={togglePopUp} />;
                            }) :
                            getFilteredMovies().map((movie, idx) => {
                                return <List key={movie.id} movie={movie} />;
                            })
                    }
                </div>

                {
                    showPopUp ?
                        <>
                            <div className="overlay"></div>
                            <div className="popup movies state-list">
                                <button className="close" onClick={togglePopUp}>x</button>
                                {
                                    movies.map((movie, idx) => {
                                        return movie.id === popUpId ? <List key={movie.id} movie={movie} /> : null;
                                    })
                                }
                            </div>
                        </> : null
                }
            </div>
        );
    }
}

export default App;
