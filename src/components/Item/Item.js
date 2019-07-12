import React from 'react';

const Item = (props) => {
	const { item, img } = props
	if(item) { 
		const {listItemId, itemName, cost} = item;
		return (
			<section className="row">
				<div className="col-md-7">
					<img src={img(listItemId)} alt="furniture from Italia" className="card-img-top"/>
				</div>
				<div className="col-md-5">
					<h5 className="card-title">{itemName}</h5>
					<p className="card-text">{cost}</p>
				</div>
			</section>
		);
	} else { return (null)}
}

export default Item;