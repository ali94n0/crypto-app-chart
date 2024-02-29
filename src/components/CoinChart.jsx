import {  useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ConvertData } from "../utils/ConvertData";


const CoinChart = ({ chartData }) => {
    const [type, setType] = useState("prices")
    

    const clickHandler = (e) => {
        if (e.target.tagName === "BUTTON") {
            setType(e.target.innerText.toLowerCase().replace(" ","_"))
        }
    }
    return (
        <div className="flex flex-col p-2 w-full h-auto">
            <div className="flex items-center gap-x-4 justify-center ">
                <img src={chartData.coin.image} alt={chartData.coin.name} className="w-10 h-10"/>
                <h3 className="text-slate-100 font-bold text-lg">{chartData.coin.name}</h3>
            </div>
            <div className="w-[720px] h-[320px] p-2 mb-4">
                <ResponsiveContainer width={"100%"} height={"100%"}   >
                <LineChart   data={ConvertData({ data: chartData, type })} className="p-6" >
                    <CartesianGrid stroke="gray"/>
                    <XAxis dataKey={"date"} />
                    <YAxis  domain={['auto', "auto"]} />
                    <Line type={"monotone"} dataKey={type} stroke="#635ae8" dot={false} />
                    <Tooltip />
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="flex flex-col my-4 items-center justify-center w-full" >
                <div onClick={(e)=>clickHandler(e)} className="flex items-center justify-evenly w-full mb-4">
                    <button className={type === "prices" ? "btn" : "btn-secondary"}>Prices</button>
                    <button className={type === "market_caps" ? "btn" : "btn-secondary"}>Market Caps</button>
                    <button className={type === "total_volumes" ? "btn" : "btn-secondary"}>Total Volumes</button>
                </div>
                <div className="flex items-center justify-evenly border-t border-neutral-600 pt-4 w-full">
                    <p className="font-bold text-blue-600">Prices:&nbsp;<span className="font-normal text-slate-100">{chartData.coin.current_price.toLocaleString()}&nbsp;$</span></p>
                    <p className="font-bold text-blue-600">ATH:&nbsp;<span className="font-normal text-slate-100">{chartData.coin.ath.toLocaleString()}&nbsp;$</span></p>
                    <p className="font-bold text-blue-600">Market Cap:&nbsp;<span className="font-normal text-slate-100">{chartData.coin.market_cap.toLocaleString()}&nbsp;$</span></p>
                </div>
            </div>
        </div>
    );
};

export default CoinChart;