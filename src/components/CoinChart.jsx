import { useEffect, useState } from "react";
import { getCoinChartApi } from "../services/CoinsServise";
import toast from "react-hot-toast";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ConvertData } from "../utils/ConvertData";


const CoinChart = ({ coin }) => {
    const [chartData, setChartData] = useState(null)
    const [type, setType] = useState("prices")
    
    
    useEffect(() => {
        const getChartData = async () => {
            try {
                const data = await getCoinChartApi({id:coin.id})
                setChartData({ ...data, coin })
                
            } catch (error) {
                toast.error(error?.message)
            }
        }
        getChartData()
    },[])
    console.log(chartData[type]);
console.log(chartData);
    return (
        <div>
            {/* {!!chartData.length && <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={ConvertData({chartData,type})}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis dataKey={type} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={type} stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
      </ResponsiveContainer>} */}
        </div>
    );
};

export default CoinChart;