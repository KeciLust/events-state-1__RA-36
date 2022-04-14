import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import {nanoid} from 'nanoid'
function CardsView(props) {
    const {cards} = props;
  return (
    <div className='cardsView'>
        {cards.map(el => <ShopCard cards={el} key={nanoid()} />)}
    </div>
  )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default CardsView
