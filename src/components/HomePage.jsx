import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCoinsApi } from "../services/CoinsServise";
import Loader from "../ui/Loader";
import Table from "./Table";
import Paginate from "../ui/Paginate";
import SearchBox from "../ui/SearchBox";


const HomePage = () => {
    
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const[currency,setCurrency]=useState("usd")
    
    useEffect(() => {
        
        const fetchAPI = async () => {
            try {
                setCoins(await getCoinsApi({page,currency}))
                setIsLoading(false)
            } catch (error) {
                toast.error(error?.message)
                setIsLoading(false)
            }
        }
        fetchAPI()
    }, [page,currency])

    const handleClick = (action) => {
        switch (action) {
            case "dec":
                if (page <= 1) { return } else {
                    return setPage(page=>page-1)
                }
            case "inc":
                if (page >= 10) { return } else {
                    return setPage(page=>page+1)
                }
            default:
                return;
        }
    }
    

    return (
        <div className="flex flex-col items-center justify-center container w-full ">
            <div>
                <SearchBox currency={currency} setCurrency={setCurrency}/>
                {!!coins.length ? <div className=""><Table coins={coins} currency={currency} /></div> : <Loader />}
            </div>
            <Paginate page={page} handleClick={handleClick}/>
        </div>
    );
};

export default HomePage;