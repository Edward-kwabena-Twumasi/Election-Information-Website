import image from "../assets/happy_people.jpg";
import NewsItem from "./NewsItem";

const NewsPage=()=> {
    const newsItems=[
        {
            "image":"../assets/happy_people.jpg",
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },
        {
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },
        {
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },{
            "image":{image},
            "stars":"5",
            "year":"2022",
            "kind":"News",
            "run":"2",
            "cast":"ussssssss",

        },
    ];

    return ( 
    <div className="flex flex-col w-screen bg-white h-screen">
        <h1 className="p-5 text-center font-bold text-4xl font-serif">News</h1>  
    <div className="grid grid-cols-3 p-5 w-full h-full">
    {newsItems.map(newsItem=><NewsItem news={newsItem}/>)}
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

export default NewsPage;