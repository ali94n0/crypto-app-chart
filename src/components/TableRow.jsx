import React, { useEffect, useState } from 'react';
import chartUp from "../assets/chart-up.svg"
import chartDown from "../assets/chart-down.svg"
import Modal from '../ui/Modal';
import CoinChart from './CoinChart';
import toast from 'react-hot-toast';
import { getCoinChartApi } from '../services/CoinsServise';

const styleCurrency = {
    "usd": "$",
    "eur":"€",
    "jpy":"¥",
}

const TableRow = ({ coin, currency }) => {
    const[isOpen,setIsOpen]=useState(false)
const [chartData, setChartData] = useState(null)
const{id,symbol,image,name,current_price,market_cap
,price_change_percentage_24h,market_cap_rank
}=coin
    
    const clickHandler =async (id) => {
        try {
                const data = await getCoinChartApi({id})
                setChartData({ ...data, coin })
                
            } catch (error) {
                toast.error(error?.message)
        }
        setIsOpen(true)
    }
    
    
    return (
        <tr className='color-slate-50'>
            <td>{market_cap_rank}</td>
            <td><div className='flex items-center'>
                <img src={image} alt={name} className='w-8 h-auto'/>
                <p className='mx-2'>{symbol}</p>
            </div></td>
            <td>{name}</td>
            <td>{current_price.toLocaleString()}&nbsp;{styleCurrency[currency]}</td>
            <td>{market_cap.toLocaleString()}&nbsp;{styleCurrency[currency]}</td>
            <td className={`${price_change_percentage_24h > 0 ? "text-green-600" :"text-red-600"}`}>{price_change_percentage_24h.toFixed(2)}&nbsp;%</td>
            <td>
                <img onClick={()=>clickHandler(id)} src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
                {isOpen && <Modal onClose={() => setIsOpen(false)}>
                    <CoinChart chartData={chartData}  />
                </Modal>}
            </td>

        </tr>
    );
};

export default TableRow;