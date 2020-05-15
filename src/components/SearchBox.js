import React from 'react';

const SearchBox = ({SearchField, searchChange}) =>
{	
	return(
		<div>
			<input className='pa3 ba b--green light-pink bg-navy' type='search' placeholder='Search Robots here' onChange = {searchChange}/>
		</div>
	);
	
}

export default SearchBox ;
