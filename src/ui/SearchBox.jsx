import React from 'react';

const SearchBox = ({currency,setCurrency}) => {
    return (
        <div className="flex items-center gap-x-2 w-full my-4">
                    <input placeholder="searce coin ..." className="px-4 py-1 rounded-md bg-neutral-600 text-slate-50 text-sm my-5"/>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="px-2 py-1 rounded-md bg-neutral-600 text-slate-50 text-sm">
                        <option value={"usd"}>USD</option>
                        <option value={"eur"}>EUR</option>
                        <option value={"jpy"}>JPY</option>
                    </select>
                </div>
    );
};

export default SearchBox;