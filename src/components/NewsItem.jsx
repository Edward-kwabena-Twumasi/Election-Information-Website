import background from "../assets/happy_people.jpg";

export default function NewsItem({ news }) {
    return (
      <div className="flex flex-col items-start m-5 h-50  shadow-md">
        
        
        <div className="w-full">
        <img src={background} alt='happy people voters' className="h-30   bg-no-repeat bg-center bg-cover"/>
        </div>
        <div className="m-10 text-black">
            <h1 className="font-bold"> News title</h1>
            <h1 className="font-normal"> News description about the news</h1>
        </div>
      </div>
    )
  }