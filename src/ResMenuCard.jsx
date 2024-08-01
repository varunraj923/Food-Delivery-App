const ResMenuCard = ({newdata})=>{
    return(
       <>
   <div className="mx-4 sm:ml-24 mt-12 text-3xl font-bold text-center">
  <h1>{newdata.data.cards[2].card.card.info.name}</h1>
</div>

<div className="shadow-xl px-4 sm:px-12 py-9 rounded-2xl mx-4 sm:ml-28 mt-2 w-full sm:w-auto">
  <span className="text-xl font-bold">
    ❇️{newdata.data.cards[2].card.card.info.avgRating} ({newdata.data.cards[2].card.card.info.totalRatingsString}) * {newdata.data.cards[2].card.card.info.costForTwoMessage}
  </span>
  <h2 className="mt-2 text-red-500 font-bold underline underline-offset-4">
    {newdata.data.cards[2].card.card.info.cuisines.join(", ")}
  </h2>
  <h2 className="font-bold mt-1">
    Outlet: <span className="font-normal">{newdata.data.cards[2].card.card.info.areaName}</span>
  </h2>
  <h2 className="mt-1 font-bold">
    {newdata.data.cards[2].card.card.info.sla.minDeliveryTime} - {newdata.data.cards[2].card.card.info.sla.maxDeliveryTime} mins
  </h2>
  <h2 className="mt-4 font-semibold text-gray-500">
    🚲 {newdata.slalastMileTravelString} | ₹45 Delivery Fee Will Apply
  </h2>
</div>


       
       </>
    );
}

export default ResMenuCard;