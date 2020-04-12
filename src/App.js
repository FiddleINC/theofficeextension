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
					<h3 className="w3-panel w3-leftbar w3-xxlarge">{quote}</h3>
					<h4>- {character}</h4>
					<p>
						<i>
							Season {season} : {episode}
						</i>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
