/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import quotes from 'the-office';
import './App.css';

function getQuotes() {
	var quotedata = {
		quote: '',
		season: '',
		episode: '',
		character: ''
	};
	const index = Math.floor(Math.random() * quotes.length);
	quotedata.season = quotes[index].season;
	quotedata.episode = quotes[index].title;
	const sceneIndex = Math.floor(Math.random() * quotes[index].scenes.length);
	const scene = quotes[index].scenes[sceneIndex];
	const lineIndex = Math.floor(Math.random() * scene.length);
	quotedata.character = scene[lineIndex].character;
	quotedata.quote = scene[lineIndex].line;
	return quotedata;
}

function App() {
	const [ quote, setQuote ] = useState('');
	const [ season, setSeason ] = useState('');
	const [ episode, setEpisode ] = useState('');
	const [ character, setCharacter ] = useState('');

	useEffect(() => {
		const quoteData = getQuotes();
		setQuote(quoteData.quote);
		setSeason(quoteData.season);
		setEpisode(quoteData.episode);
		setCharacter(quoteData.character);
		console.log('UseEffect Working');
		return () => {};
	}, []);

	return (
		<div className="App">
			<div className="App-header">
				<div className="w3-container">
					<h2 className="w3-panel w3-leftbar w3-xxlarge">{quote}</h2>
					<h3>- {character}</h3>
					<br />
					<h5>
						<i>
							Season {season} : {episode}
						</i>
					</h5>
				</div>
				<div className="footer w3-display-container w3-display-bottomright">
					<span className="App-link">
						<b>Made by Prachurjya Biswas</b>
					</span>
					<br />
					<a href="https://facebook.com/prabiswas17" className="fa fa-facebook" />
					<a href="https://twitter.com/fiddleinc" className="fa fa-twitter" />
					<a href="https://instagram.com/fiddle_inc" className="fa fa-instagram" />
					<a href="https://github.com/fiddleinc" className="fa fa-github" />
				</div>
			</div>
		</div>
	);
}

export default App;
