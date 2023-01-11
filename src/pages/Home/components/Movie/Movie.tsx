import React from 'react';
import './styles/Movie.scss';
export interface MovieInterface {}

const Movie : React.FC<MovieInterface> = () => {
	return <div className='movie'>Movie</div >;
};

export default Movie;
