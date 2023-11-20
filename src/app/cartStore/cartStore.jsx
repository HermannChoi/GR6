import { create } from 'zustand';

const useCartStore = create(
  (set) => ({
    total: 0,
    cartItems: [],
    setCarts: (newProduct) => {
      set((state) => {
        const existingCart = state.cartItems.find(
          (item) => item.id === newProduct.id
        )

        if (existingCart) {
          return {
            cartItems: state.cartItems.map((item) => 
            item.id === newProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
            ),
          }
        } else {
          return {
            cartItems: [
              ...state.cartItems,
              { ...newProduct, quantity: 1  }
            ]
          }
        } 
      })
    },
    
  })
);

export default useCartStore