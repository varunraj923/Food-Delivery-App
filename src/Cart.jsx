import { useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.Items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Cart</h1>
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
      <button
        className="p-2 m-2 bg-black text-white rounded-lg hover:bg-gray-800"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      
      {cartItems?.length === 0 && (
        <h1 className="mt-12 sm:mt-24 text-xl sm:text-2xl md:text-3xl font-bold">
          Cart is empty. Add Items to the cart! ❤️
        </h1>
      )}
  
      <ItemList items={cartItems} />
    </div>
  </div>
  
  );
};

export default Cart;