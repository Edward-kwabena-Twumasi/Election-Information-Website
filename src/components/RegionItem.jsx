export default function RegionItem({ region }) {
    return (
      <div key={region.id} className="region-card flex flex-col justify-center p-6 w-50  shadow-xl rounded-md">
          <h2 className="font-thin text-slate-900 text-center uppercase">{region.name}</h2> 
          <h2 className="font-bold text-black text-center">{region.seats} constituencies</h2> 
      </div>
    )
  }

  
