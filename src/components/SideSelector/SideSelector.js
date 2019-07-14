import React from 'react';
import { withRouter } from 'react-router-dom';


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
		<ul className="item-list list-group col-md-3">
        	{items}
    	</ul>
	)
};


export default withRouter(SideSelector);