import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class ItemList extends Component {

  render() {
    const items = [
    {
      name:"Cereales con chocolate",
      description: "Cereales rellenos de chocolate",
      quantity: 2,
      category: "Cereales",
      price: 5
    },
    {
      name:"Hamburguesa con queso",
      description: "Hamburguesa rica y saludable",
      quantity: 1,
      category: "Fast-food",
      price: 15
    },
    {
      name:"Agua mineral",
      // description: "Agua de un charco del Himalaya",
      quantity: 2,
      category: "Bebida",
      price: 5
    }
  ];
    const pintarLi = function(items){
      return (
      <li>
        <Item
          name= {items.name}
          description= {items.description}
          quantity= {items.quantity}
          category= {items.category}
          // price= {items.price}
        />
      </li>)
    }
    return (
      <ul className="item-list">
        {items.map(pintarLi)}
      </ul>
    );
  }
}

export default ItemList;
