import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

const Random=()=>{
    const[gif,setGif]=useState('');

    async function fetchData(){
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        try{
            const {data}= await axios.get(url);
            console.log(data)
            const imageSource=data.data.images.downsized_large.url;
            setGif(imageSource);

        }catch(error){
            console.error("Error fetching data:", error.response ? error.response.data : error.message);
        }
    }
    useEffect( ()=>{
        fetchData();
    },[]);


    function clickHandler(){
        fetchData();
    }


    return(
        <div className="bg-green-500 w-1/2 mx-auto mt-[20px]  rounded-lg items-center border border-black gap-y-5 flex flex-col">
            <h1 className="text-2xl font-bold underline pt-4  mt-[15px]">A RANDOM GIF</h1>
            
            {gif ? <img src={gif} width="450" alt="Random GIF" /> : <p>Loading...</p>}
            <button 
            className="bg-gray-300 rounded-lg pt-2 pb-2 w-[550px] font-bold text-lg mb-[20px]"
            onClick={clickHandler}>GENERATE</button>
        </div>
    )
}

export default Random;