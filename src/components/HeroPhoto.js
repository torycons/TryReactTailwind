import React from 'react'
import PropTypes from 'prop-types'

function HeroPhoto(props) {
    return (
        <img src={props.img} />
    )
}

HeroPhoto.propTypes = {
    img: PropTypes.string.isRequired
}

export default HeroPhoto