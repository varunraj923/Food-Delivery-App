import ItemList from "./ItemList"
import { useState } from "react"

const ResCategry = ({data})=>{

    const [showItem, setShowItem] = useState(false);
    const showData = ()=>{
        setShowItem(!showItem)

    }
    
   
  
    
    return(
        <>
           <div>
  {/* Header */}
  <div className="w-full sm:w-11/12 md:w-9/12 lg:w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
    <div onClick={showData} className="flex justify-between items-center cursor-pointer">
      <span className="font-bold text-lg sm:text-xl">
        {data.title} ({data.itemCards.length})
      </span>
      <span className="text-xl sm:text-2xl">⬇️</span>
    </div>

    {showItem && <ItemList items={data.itemCards} />}
  </div>
</div>

        
    
        
        </>
  
    )
}

export default ResCategry