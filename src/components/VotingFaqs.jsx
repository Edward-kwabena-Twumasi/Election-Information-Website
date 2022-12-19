import Faq from "./Faq";

const VotingFaqs=()=>{

    return (
      <div className="h-screen bg-white p-20 overflow-auto">
        <div className="flex flex-col justify-start m-15 pt-5">
          <h1 className="font-light text-4xl ">Frequently Asked Questions</h1>
          <Faq title="How do I know my pollen station" body="Refer to our registry"/>
        </div>
      </div>
          );
  }

export default VotingFaqs;