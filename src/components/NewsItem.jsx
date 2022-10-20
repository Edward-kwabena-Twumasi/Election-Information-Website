export default function NewsItem({ news }) {
    return (
      <article className="flex flex-col items-start m-5   shadow-md">
        <img src={news.image} alt="news display" height="150" className=" rounded-md  bg-no-repeat bg-center bg-cover w-full" />
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-900 truncate pr-20">{news.title}</h2>
          
     
        </div>
      </article>
    )
  }