import React from 'react';


const SideSelector = (props) => {

	const { data, onIndicatorSelected } = props;

	const items = data().map((item) => {
		const {id, indicator} = item;
		return <li key = {id}
		className="list-group-item"
		onClick = {() => onIndicatorSelected(id)}>
					{indicator}
			   </li>
	});

	return(
		<ul className="item-list list-group">
        	{items}
    	</ul>
	)
};


export default SideSelector;