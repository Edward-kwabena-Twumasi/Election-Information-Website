// import image from "../assets/happy_people.jpg";
import { useState } from "react";
import background from "../assets/happy_people.jpg";

import NewsItem from "./NewsItem";

const MediaCenter=()=> {
    const [tab,setTab]=useState(0)
    const updateTab=(t)=>{
        setTab(t)
    }
    const newsItems=[
        
        {
            "image":{background},
            "id":"0",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },
        {
            "image":{background},
            "id":"1",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{background},
            "id":"2",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{background},
            "id":"3",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{background},
            "id":"4",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        }
    ];

    return ( 
    <div className="flex flex-col w-screen bg-white h-full p-20">
        {/* <h1 className="p-5 text-center font-bold text-3xl font-serif self-start">Media</h1>   */}
        <div className="tabbar flex self-center justify-center gap-5 m-7 text-white p-15 px-20 rounded-lg shadow-2xl bg-slate-200 h-[50px] border border-t-slate-600 border-l-slate-600 ">
            <h1 className={tab===0? "tab p-2 bg-slate-800 px-5 rounded-lg h-full":"tab text-slate-900 p-2 bg-slate-200 px-5 rounded-lg h-full font-bold"} onClick={event =>updateTab(0)}>All</h1>
            <h1 className={tab===1? "tab p-2 bg-slate-800 px-5 rounded-lg h-full":"tab text-slate-900 p-2 bg-slate-200 px-5 rounded-lg h-full font-bold"} onClick={event =>updateTab(1)}>News Articles</h1>
            <h1 className={tab===2? "tab p-2 bg-slate-800 px-5 rounded-lg h-full":"tab text-slate-900 p-2 bg-slate-200 px-5 rounded-lg h-full font-bold"} onClick={event =>updateTab(2)}>Social</h1>
            <h1 className={tab===3? "tab p-2 bg-slate-800 px-5 rounded-lg h-full":"tab text-slate-900 p-2 bg-slate-200 px-5 rounded-lg h-full font-bold"} onClick={event =>updateTab(3)}>Videos</h1>
        </div>
    <div className="grid grid-cols-4 p-5 w-full h-full gap-5">
    {newsItems.map(newsItem=><NewsItem news={newsItem} key={newsItem.id}/>)}
    </div>
    {/* <div className=" p-5 w-1/3 ">
    {newsItems.map(newsItem=><NewsItem news={newsItem}/>)}
    </div>
    <div className=" p-5 w-1/3 ">
    {newsItems.map(newsItem=><NewsItem news={newsItem}/>)}
    </div> */}
    </div>  
   );
}

export default MediaCenter;