import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem';
import { nanoid } from 'nanoid';

function ListView(props) {
  const {items} = props;
    return (
    <ul className='listView'>
        {items.map(el => <ShopItem item={el} key={nanoid()} />)}
    </ul>
  )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListView
