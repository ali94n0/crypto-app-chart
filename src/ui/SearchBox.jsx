import React, { useEffect, useRef, useState } from 'react';
import { searchCoinApi } from '../services/CoinsServise';
import toast from 'react-hot-toast';
import SearchResult from '../components/SearchResult';
import Loader from './Loader';
import useOutboxClick from '../hooks/useOutboxClick';

const SearchBox = ({ currency, setCurrency }) => {
    const [search, setSearch] = useState("")
    const [searchCoins, setSearchCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const boxRef =useOutboxClick(()=>setIsOpen(false))
    

    useEffect(() => {

        const controler = new AbortController()
        const signal = controler.signal;
        const searchCoin = async () => {
            setIsLoading(true)
            try {
                setSearchCoins(await searchCoinApi({ search,signal }))
                setIsOpen(true)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    return;
                } else {
                    toast.error(error?.message)
                }
            } finally {
                setIsLoading(false)
                
            }
        }
        searchCoin()

        return () => {
            controler.abort()
        }
    },[search])
    return (
        <div className="flex items-center gap-x-2 w-full my-4 relative">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="searce coin ..." className="px-4 py-1 rounded-md bg-neutral-600 text-slate-50 text-sm my-5"/>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="px-2 py-1 rounded-md bg-neutral-600 text-slate-50 text-sm">
                <option value={"usd"}>USD</option>
                <option value={"eur"}>EUR</option>
                <option value={"jpy"}>JPY</option>
            </select>
            {((!!search.length && isOpen) || isLoading )  && <div ref={boxRef}  className='flex flex-col px-2 rounded-md absolute w-60 top-14 left-0 h-56 overflow-y-scroll bg-neutral-600'>
                {isLoading ? <Loader/> : searchCoins.map(coin => <SearchResult key={coin.id} coin={coin}/>)}
            </div>}
        </div>
    );
};

export default SearchBox;