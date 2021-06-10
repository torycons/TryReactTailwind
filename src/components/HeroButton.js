import React from 'react'
import PropTypes from 'prop-types'

function HeroButton({ title }) {
    return (
        <button 
            className="
                w-40
                h-10
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-green-500 
                hover:bg-green-700">
            { title }
        </button>
    );
}

HeroButton.defaultProps = {
    title: "Hi"
}

HeroButton.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeroButton
  