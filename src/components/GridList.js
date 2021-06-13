import React from 'react';
import PropTypes from 'prop-types'

function GridList({ listCount }) {
    const listArr = [...Array(listCount).keys()]

    const newList = listArr.map(i => {
        return <div key={i} className="bg-yellow-100 w-full h-40"></div>
    })

    return (
        <div>
            <div className="mt-8 mb-8">
                <h1 className="text-center text-3xl">Lorem ipsum.</h1>
                <p className="text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="flex justify-around space-x-10 mt-4">
                    {newList}
                </div>
            </div>
        </div>
    );
}

GridList.defaultProps = {
    listCount: 6
}

GridList.propTypes = {
    listCount: PropTypes.number.isRequired
}

export default GridList;
