import { reactive, computed } from "vue";

const cartState = reactive({
  items: [],
});

const addToCart = (product) => {
  const existing = cartState.items.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartState.items.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (productId) => {
  const index = cartState.items.findIndex((item) => item.id === productId);
  if (index !== -1) cartState.items.splice(index, 1);
};

const updateQuantity = (productId, delta) => {
  const item = cartState.items.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
};

const clearCart = () => {
  cartState.items.splice(0, cartState.items.length);
};

const totalItems = computed(() =>
  cartState.items.reduce((sum, item) => sum + item.quantity, 0),
);
const totalPrice = computed(() =>
  cartState.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
);

export function useCart() {
  return {
    cartState,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
}
