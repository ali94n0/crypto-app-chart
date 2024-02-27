import React from 'react';

const Paginate = ({handleClick,page}) => {
    return (
        <div className="flex items-center  p-2 mt-8 gap-x-4">
                <button className={page === 1 ? "btn opacity-30" : "btn"} disabled={page===1} onClick={()=>handleClick("dec")}>previous</button>
                <p className={page === 1 ? "btn" : "btn-disable"}>1</p>
                <p className={page === 2 ? "btn" : "btn-disable"}>2</p>
                {(page > 2 && page < 9) && <>
                    <p className="color-slate-50">...</p>
                    <p className="btn">{page}</p>
                </>}
                <p className="color-slate-50">...</p>
                <p className={page === 9 ? "btn" : "btn-disable"}>9</p>
                <p className={page === 10 ? "btn" : "btn-disable"}>10</p>
                <button className={page === 10 ? "btn opacity-30" : "btn"} disabled={page===10} onClick={()=>handleClick("inc")}>next</button>
            </div>
    );
};

export default Paginate;