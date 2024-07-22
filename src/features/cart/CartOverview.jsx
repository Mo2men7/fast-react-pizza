import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="bg-stone-800 text-stone-200 uppercase py-4 px-4 sm:px-6 text-sm 
    md:text-base flex items-center justify-between "
    >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        {totalCartQuantity && <span>{totalCartQuantity} pizzas</span>}
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
