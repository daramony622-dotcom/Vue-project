<template>
  <section class="min-h-screen bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-3xl font-semibold text-slate-900">Shopping Cart</h1>
          <p class="mt-2 text-sm text-slate-500">
            Review your selected products, update quantities, and see the total
            cost.
          </p>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Cart total</p>
          <p class="mt-3 text-2xl font-semibold text-indigo-600">
            {{ formatPrice(totalPrice) }}
          </p>
          <p class="text-sm text-slate-500">{{ totalItems }} item(s)</p>
        </div>
      </div>

      <div
        v-if="cartState.items.length === 0"
        class="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
        <p class="text-lg font-semibold text-slate-900">Your cart is empty</p>
        <p class="mt-2">
          Add products from the Product page to start shopping.
        </p>
      </div>

      <div v-else class="space-y-6">
        <div
          v-for="item in cartState.items"
          :key="item.id"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div
            class="grid gap-6 md:grid-cols-[140px_minmax(0,1fr)_auto] items-center">
            <img
              :src="item.image"
              alt="Product image"
              class="h-32 w-full rounded-3xl object-cover md:h-28" />
            <div>
              <h2 class="text-lg font-semibold text-slate-900">
                {{ item.name }}
              </h2>
              <p class="mt-2 text-sm text-slate-500">{{ item.category }}</p>
              <p class="mt-3 text-sm text-slate-500">{{ item.description }}</p>
            </div>
            <div class="space-y-4 text-right">
              <p class="text-lg font-semibold text-indigo-600">
                {{ formatPrice(item.price) }}
              </p>
              <div class="flex items-center justify-end gap-2">
                <button
                  @click="updateQuantity(item.id, -1)"
                  class="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  -
                </button>
                <span
                  class="min-w-[2rem] text-center font-semibold text-slate-900"
                  >{{ item.quantity }}</span
                >
                <button
                  @click="updateQuantity(item.id, 1)"
                  class="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  +
                </button>
              </div>
              <button
                @click="removeFromCart(item.id)"
                class="text-sm font-semibold text-red-600 hover:text-red-800">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-slate-500">
              Subtotal ({{ totalItems }} items)
            </p>
            <p class="mt-2 text-3xl font-semibold text-slate-900">
              {{ formatPrice(totalPrice) }}
            </p>
          </div>
          <div
            class="mt-4 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center">
            <button
              @click="clearCart"
              class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Clear cart
            </button>
            <button
              class="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useCart } from "../store/cart";

  const {
    cartState,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
</script>
