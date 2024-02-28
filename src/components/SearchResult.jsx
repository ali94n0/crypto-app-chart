import React from 'react';

const SearchResult = ({coin}) => {
    return (
        <div className='flex items-center gap-x-2 border-b border-gray-400 py-1 px-2'>
            
                <img src={coin.thumb} alt={coin.name} className='w-6 h-auto'/>
                <p className='text-slate-200 text-sm'>{coin.name}</p>
            
        </div>
    );
};

export default SearchResult;