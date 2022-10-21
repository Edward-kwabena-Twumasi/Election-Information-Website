

const Quote=(props)=>{

    return(
        
        <div className={"quote self-center m-8   text-black flex justify-center"+props.extrastyle}>
          <blockquote className="font-extrabold text-4xl w-5/6 m-2 font-serif">" We are a privately ownded and managed  platform, 
            set to provide quality information about elections to Ghanains "</blockquote>
           
        </div>
        
    );
}

export default Quote;