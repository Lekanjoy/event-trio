import { StaticImageData } from 'next/image';
import { create } from 'zustand'

export type CartItem = {
  id: number;
  name: string;
  price: string;
  img: StaticImageData;
  quantity: number;
  rating: number;
}

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateItemQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    } else {
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  clearCart: () => set({ cart: [] }),
  updateItemQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map(cartItem =>
      cartItem.id === id
        ? { ...cartItem, quantity }
        : cartItem
    )
  }))
}))
