import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {
   const {icon, onSwitch} = props;

  return (
   <button className='material-icons icon' onClick={onSwitch}>{icon}</button> 
  )
}

IconSwitch.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    icon: PropTypes.object,
}

export default IconSwitch
