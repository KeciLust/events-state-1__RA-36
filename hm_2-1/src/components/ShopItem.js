import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
    const {item} = props;
  return (
   <li className='shopItem'>
    <img src={item.img} alt={item.name} className='shopItemImg' />  
    <h3 className='shopItemTitle'>{item.name}</h3>
    <div className='shopItemColor'>{item.color}</div>
    <div className='shopItemPrice'>{'$' + item.price}</div>
    <button className='shopItemButton'>{'ADD TO CARD'}</button>  
   </li>
  )
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ShopItem
