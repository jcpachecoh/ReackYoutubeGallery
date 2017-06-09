import React,{ Component } from 'react';


class SearchBar extends Component{
	//automaticaly new instance
	constructor(props){
		super(props);

		this.state={ term: ''};
	}

	render(){
		return (
				<div className="search-bar">			
					<input 
						value={this.state.term}
						onChange={(e)=>this.onInputChane(e.target.value)}/>

				</div>	
				);
	}

	onInputChane(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;