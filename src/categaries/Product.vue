<template>
  <section class="min-h-screen bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Product showcase
        </p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Featured product cards
        </h1>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Browse our selected items with clean, minimal product cards designed
          for e-commerce landing pages.
        </p>
      </div>

      <div class="mb-8 flex justify-center">
        <span
          class="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
          {{ totalItems }} item(s) in cart
        </span>
      </div>

      <!-- Layout Card-box -->
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <!-- Loop v-for all Products -->
        <article
          v-for="product in products"
          :key="product.id"
          class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="relative overflow-hidden bg-slate-100">
            <div
              class="h-60 bg-cover bg-center"
              :style="`background-image: linear-gradient(rgba(15,23,42,0.12), rgba(15,23,42,0.12)), url(${product.image})`"></div>
            <span
              class="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {{ product.category }}
            </span>
          </div>
          <div class="space-y-4 p-6">
            <div>
              <h2 class="text-xl font-semibold text-slate-900">
                {{ product.name }}
              </h2>
              <p class="mt-2 text-sm text-slate-500">
                {{ product.description }}
              </p>
            </div>
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-lg font-semibold text-indigo-600">
                  {{ formatPrice(product.price) }}
                </p>
                <p class="text-sm text-slate-400">Free shipping</p>
              </div>
              <button
                @click="addToCart(product)"
                class="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { useCart } from "../store/cart";

  const { addToCart, totalItems } = useCart();

  const products = ref([
    {
      id: 1,
      name: "Luna Smart Watch",
      category: "Wearables",
      description:
        "A sleek watch with health tracking, notifications, and long battery life.",
      price: 129,
      image:
        "https://i.pinimg.com/736x/9d/0f/f1/9d0ff1760b8a668ef63bc7adfd21a833.jpg",
    },
    {
      id: 2,
      name: "iPhone 17 Pro Max",
      category: "Audio",
      description:
        "Premium noise cancellation with crisp sound and comfortable ear cushions.",
      price: 189,
      image:
        "https://i.pinimg.com/1200x/79/ea/80/79ea807900a1cdc58aded73674714a96.jpg",
    },
    {
      id: 3,
      name: "Nova Laptop Stand",
      category: "Workspace",
      description:
        "Ergonomic and portable stand crafted for a clean desk and better posture.",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 10,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 11,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 12,
      name: "Orion Desk Lamp",
      category: "Office",
      description:
        "A modern LED desk lamp with adjustable brightness and USB charging port.",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
  ]);

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };
</script>

<style scoped></style>
