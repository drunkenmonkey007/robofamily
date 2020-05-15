import React from 'react';
import Card from './Card';

const CardList = ({robots}) => 
{
	const CardComp = robots.map((card,i) => 
			<Card key={i} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
		)

	return (
		<div>
			{CardComp}
		</div>
		);
}

export default CardList













