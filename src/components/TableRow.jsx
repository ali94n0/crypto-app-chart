import React from 'react';
import chartUp from "../assets/chart-up.svg"
import chartDown from "../assets/chart-down.svg"

const styleCurrency = {
    "usd": "$",
    "eur":"€",
    "jpy":"¥",
}

const TableRow = ({ coin, currency }) => {

    const{symbol,image,name,current_price,market_cap
,price_change_percentage_24h,market_cap_rank
}=coin
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
                <img src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
            </td>

        </tr>
    );
};

export default TableRow;