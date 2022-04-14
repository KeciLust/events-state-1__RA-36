import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
    const {cards} = props;
      return (
    <div className='shopCard'>
        <h3>{cards.name}</h3>
        <div>{cards.color}</div>
        <img src={cards.img} className="shopCardImg" alt={cards.name} />
        <div className='shopcardPriceButton'>
          <div className='shopCardPrice'>{`$` + cards.price}</div>
          <button className='shopCardButton'>ADD TO CARD</button>
        </div>
    </div>
  )
}

ShopCard.propTypes = {
    cards: PropTypes.object.isRequired,
}

export default ShopCard
