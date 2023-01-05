import React from 'react';
import './styles/Home.scss';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return <div className='home'>Home</div >;
};

export default Home;
