import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Text=()=>{

    const[gif,setGif]=useState("");
    const[tag,setTag]=useState("car");

    async function fetchData(){
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value)
    }



    return(
        <div className="bg-blue-600 flex flex-col w-1/2 mt-[20px] items-center border border-black gap-y-5 rounded-lg" >
            <h1 className="underline font-bold text-2xl mt-[15px] ">RANDOM {tag} GIF</h1>
            <img src={gif}></img>
            <input
            className="bg-gray-300 rounded-lg pt-2 pb-2 w-[550px] font-bold text-lg mb-[20px]   text-center"
            value={tag}
            onChange={changeHandler}
            ></input>
            <button 
            className="bg-gray-300 rounded-lg pt-2 pb-2 w-[550px] font-bold text-lg mb-[20px]"
            onClick={clickHandler}>GENERATE</button>

        </div>
    )
}

export default Text;