import React from 'react';

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
         <span className="term">{label} {item[field]}</span>
      </li>
    )
};
export {Record}
const Item = (props) => {
	const { item, img, children } = props
	if(item) { 
		const {listItemId, itemName, cost} = item;
		return (
			<section className="row">
				<div className="col-md-7">
					<img src={img(listItemId)} alt="furniture from Italia" className="card-img-top"/>
				</div>
				<div className="col-md-5">
					<h5 className="card-title">{itemName}</h5>
					<ul className="list-group list-group-flush"> 
					{
						React.Children.map(children, (child) => {
							return React.cloneElement(child, {item})
						})
					}
					</ul>
				</div>
			</section>
		);
	} else { return (null)}
}

export default Item;