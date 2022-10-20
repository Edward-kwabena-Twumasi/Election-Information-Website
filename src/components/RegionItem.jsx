export default function RegionItem({ region }) {
    return (
      <div className="flex flex-col justify-center h-40 w-50  shadow-md border border-slate-500 rounded-md">
          <h2 className="font-semibold text-slate-900 text-center uppercase">{region.region}</h2>    
      </div>
    )
  }