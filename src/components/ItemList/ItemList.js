import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemList = (props) => {

	const { data, img, onItemSelected} = props;
	if(data) { 
	const items = data.map((item) => {
		const {listItemId, itemName, cost} = item;
		const onClick = () => {
			onItemSelected(listItemId);
			props.history.push(`/item/${listItemId}`);
		}
		return (
			<div 
			key = {listItemId}
			className="card col-md-4 wrapper-central"
			onClick= {onClick}>
				<img src={img(listItemId)} alt="furniture from Italia" className="card-img-top"/>
				<h5 className="card-title">{itemName}</h5>
				<p className="card-text">Cost: ${cost}</p>
			</div>
		);
	});
	return (
		<section className = "col-md-9">
			<div className="row">
				{items}
			</div>
		</section>
	);
	} else { return (null)}
};

export default withRouter(ItemList);
