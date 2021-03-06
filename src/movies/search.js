import React from 'react';

const MovieSearch = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchStr(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default MovieSearch;