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
          <input
            type="number"
            value={quantity}
            onChange={(e) => updateOrDeleteItem(id, Number(e.target.value))}
            className="text-sm w-10 border border-black/40 p-px text-center"
          />
          <p className="font-semibold text-sm">${price}</p>
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
