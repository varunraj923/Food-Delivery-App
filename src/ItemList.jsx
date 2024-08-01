import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addItem } from "./utils/cartSlice";


const ItemList = ({items})=>{
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
    
  }
 

    return(
    
      <>
    
    <div>
  {items.map((item) => (
    <div
      data-testid="foodItems"
      key={item.card.info.id}
      className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col sm:flex-row justify-between items-center sm:items-start"
    >
      <div className="w-full sm:w-9/12">
        <div className="py-2 text-lg sm:text-xl font-bold">
          <span>{item.card.info.name}</span>
          <span className="ml-2">
            - ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>

        <div className="mb-4 font-semibold text-green-600">
          ❇️ {item.card.info.ratings.aggregatedRating.rating}
        </div>
        <p className="text-sm font-medium">{item.card.info.description}</p>
      </div>
      <div className="w-full sm:w-3/12 flex flex-col items-center sm:items-start p-4">
        <button
          onClick={() => handleAddItem(item)}
          className="p-2 mb-2 rounded-lg bg-black text-white shadow-lg hover:bg-yellow-400 hover:text-black"
        >
          Add +
        </button>
        <img src={CDN_URL + item.card.info.imageId} className="w-full h-auto" />
      </div>
    </div>
  ))}
</div>

      
     
      
      </>


    );
}

export default ItemList