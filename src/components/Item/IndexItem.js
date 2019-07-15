import React from 'react';
import Item, { Record } from './Item.js';

const IndexItem = (props) => {
	const { item, img } = props;
	return (
		<Item item={item} img={img}>
		    <Record field = "manufacturer" label = "Manufacturer: "/>
		    <Record field = "material" label = "Material: "/>
		    <Record field = "cost" label = "Cost: $ "/>
		</Item>
	)
};

export default IndexItem