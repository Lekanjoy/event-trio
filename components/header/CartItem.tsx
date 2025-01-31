import Image from "next/image";
import { type CartItem as TypeCartItem, useCartStore } from "@/store/store";
import { MdOutlineDelete } from "react-icons/md";

type CartItemProps = {
  cart: TypeCartItem;
};

const CartItem = ({ cart }: CartItemProps) => {
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const updateItemQuantity = useCartStore((store) => store.updateItemQuantity);
  const { id, name, price, img, quantity } = cart;

  // Remove item from cart when quantity is 0
  const updateOrDeleteItem = (id: number, value: number) => {
    if (value < 1) {
      removeFromCart(id);
    } else {
      updateItemQuantity(id, value);
    }
  };

  return (
    <div className="flex justify-between items-center shadow p-1 bg-white border rounded-md">
      <div className="flex gap-x-2 items-center">
        <Image
          src={img}
          alt={name}
          className="w-[100px] h-[100px] rounded-md"
        />
        <div className="flex flex-col gap-y-px">
          <p className="font-medium ">{name}</p>
          <p className="font-semibold text-sm">${price}</p>
          <div className="flex gap-x-3 items-center mt-1 cursor-pointer lg:gap-x-6">
            <button
              onClick={() => updateOrDeleteItem(id, quantity + 1)}
              className="text-sm font-medium text-white bg-black px-2"
            >
              +
            </button>
            <span className="text-sm font-bold">{quantity}</span>
            <button
              onClick={() => updateOrDeleteItem(id, quantity - 1)}
              className="text-sm font-medium bg-red-500 px-2 text-white"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <MdOutlineDelete
        size={20}
        onClick={() => removeFromCart(id)}
        className="cursor-pointer text-red-700"
      />
    </div>
  );
};

export default CartItem;
