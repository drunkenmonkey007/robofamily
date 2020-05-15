import React, {Component} from 'react';
import CardList from '../components/CardList' ;
import SearchBox from '../components/SearchBox';
// import {robots} from './robots' ;
import errorboundary from '../components/errorboundary';
import './App.css';

// const App = (props) => 
// 	{
// 		return(
// 			<div>
// 				<SearchBox />
// 				<CardList robots = {robots} />
// 			</div>
// 			);
// 	}
	
	

class App extends Component{
	constructor()
	{
		super()
		this.state = {
			robots : [],
			SearchField : ''
		}
	}

	componentDidMount()
	{	
		fetch('https://jsonplaceholder.typicode.com/users').
		then(response => {return response.json();}).
		then(users => {this.setState({robots : users})})
		
	}

	OnSearchChange = (event) => {
		this.setState({SearchField : event.target.value})
	}


	render() {
		const { robots , SearchField} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(SearchField.toLowerCase()) 
			}); 

		if (this.state.robots.length === 0)
		{
			return <h1> Loading </h1>
		}

		else
		{
			return (
			<div className = 'tc'>
				<h1 className= 'f1'> ROBO FAMILY </h1>
				<SearchBox searchChange = {this.OnSearchChange}/>
				<errorboundary>
					<CardList robots = {filteredRobots} />
				</errorboundary>
			</div>
			);
		}
		
	}
}

export default App;