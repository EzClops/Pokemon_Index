import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div>
            <input
                className='tc'
                type='search'
                placeholder='Search Pokemon'
                onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;