import React from 'react';

const ItemList = (props) => {

	const { data, img, onItemSelected} = props;
	if(data) { 
	const items = data.map((item) => {
		const {listItemId, itemName, cost} = item;
		return (
			<div 
			key = {listItemId}
			className="card col-md-4"
			onClick= {() => onItemSelected(listItemId)}>
				<img src={img(listItemId)} alt="furniture from Italia" className="card-img-top"/>
				<h5 className="card-title">{itemName}</h5>
				<p className="card-text">{cost}</p>
			</div>
		);
	});
	return (
		<div className="row">
			{items}
		</div>
	);
	} else { return (null)}
};

export default ItemList;
