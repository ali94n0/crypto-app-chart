import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCoins } from "../services/CoinsServise";
import Loader from "../ui/Loader";
import Table from "./Table";


const HomePage = () => {
    
    const [coins, setCoins] = useState([])
    const[isLoading,setIsLoading] = useState(true)
    
    useEffect(() => {
        
        const fetchAPI = async () => {
            try {
                setCoins(await getCoins())
                setIsLoading(false)
            } catch (error) {
                toast.error(error?.message)
                setIsLoading(false)
            }
        }
        fetchAPI()
    }, [])
    

    return (
        <div className="flex flex-col items-center justify-center container w-full ">
            {!!coins.length ? <div className=""><Table coins={coins}/></div> : <Loader/>}
        </div>
    );
};

export default HomePage;