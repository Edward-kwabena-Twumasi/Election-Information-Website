import background from "../assets/edward.png";
import 'animate.css';

const Developer=(props)=>{

    return(
        
        <div className={"developer h-full bg-white flex flex-col justify-center p-20 pt-0 items-start flex-nowrap"}>
            
                <h1 className="title font-semibold text-2xl text-pink-500 mb-8">About Me</h1>
            <div className="body flex w-full justify-start m-3 ml-0">
                <div className="images w-60 h-60 rounded-md  shadow-xl bg-white self-start bg-no-repeat bg-start bg-cover mr-7 hover:animate-bounce duration-500" style={{backgroundImage:"url("+background+")"}}>
                </div>
                <div className="words flex flex-col ">
                    <div className="intro mb-7 flex flex-col">
                        <h1 className="font-extrabold lg:text-4xl text-2xl text-black mb-2 animate__animated animate__bounceInRight animate__faster">HELLO <span className="text-red-600">.</span></h1>
                        <h1 className="font-extrabold lg:text-4xl text-2xl text-black mb-2 duration-150 animate__animated animate__fadeInUp animate__fast">MY NAME IS <span className="text-yellow-600">.</span></h1>
                        <h1 className="font-extrabold lg:text-4xl  text-black duration-200 animate__animated animate__bounce animate__bounceInRight animate__slow">EDWARD KWABENA TWUMASI <span className="text-green-600">.</span></h1>
                    </div>

                    <div className="more-intro flex flex-col">
                        <h1 className="font-normal lg:text-2xl text-xl text-black ">I ♥ basketball, rap, taking walks</h1>
                        <h1 className="lg:font-extrabold font-bold  text-black m-2 self-start">AND</h1>
                        <h1 className=" lg:text-2xl text-xl text-black ">I write code to give life to Ideas</h1>
                    </div>
                </div>
                
            </div>
            <div className="verbal mt-6">
                <h1 className="title lg:font-semibold lg:text-xl mb-3 font-normal">Languages I speak</h1>
                <div className="flex self-center justify-center gap-4 ">
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">English  <span className="font-normal font-serif hidden lg:inline text-green-900">Proficient</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">Spanish  <span className="font-normal font-serif hidden lg:inline text-green-500">Intermediate</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">French  <span className="font-normal font-serif hidden lg:inline  text-green-500">Intermediate</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">Portuguese  <span className="font-normal font-serif hidden lg:inline text-yellow-600">Beginner</span> </h2> 
                </div>
            </div>
            <div className="technical mt-10">
                <h1 className="title lg:font-semibold lg:text-xl mb-3  font-normal">
                    Technologies I use
                  </h1>
                <div className="flex flex-wrap">
                    <div className="flex self-center justify-center gap-2 w-1/3 flex-wrap shadow-lg py-20 rounded-xl">
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Javascript </h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Nodejs  </h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">React Js  </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">HTML</h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">CSS</h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Postgresql</h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">MongoDb</h2>
            
                    </div>
                    
                    <div className="flex self-center justify-center gap-4 w-1/3 flex-wrap shadow-lg py-20 rounded-xl">
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Java</h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Android  </h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Dart </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Firebase </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Flutter </h2>

                    </div>
                    <div className="flex self-center justify-center gap-4 w-1/3 flex-wrap shadow-lg py-20 rounded-xl">
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Python</h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Numpy  </h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Pandas </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Tensorflow</h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Scikit Learn </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">NLTK </h2>

                    </div>
                    <div className="flex self-center justify-center gap-4 w-1/3 flex-wrap shadow-lg py-20 rounded-xl">
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Aws</h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Kubernates  </h2> 
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Docker </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Azure</h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Github </h2>
                        <h2 className="font-bold p-6 pt-2 pb-2  rounded-full shadow-xl ">Git </h2>

                    </div>

                </div>
            </div>
            <div className="nav flex self-center justify-center gap-4 p-8 pt-4 pb-4  rounded-full shadow-xl bg-slate-200  mb-0 sticky">
              <button className="font-bold">About me</button> 
              <button>Projects</button> 
              <button>Contact</button>  
            </div>
           
        </div>
        
    );
}

export default Developer;