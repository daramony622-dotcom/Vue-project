<template>
  <section class="min-h-screen bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 rounded-[2rem] bg-white p-10 shadow-xl sm:p-14">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-600">
              Modern product experience
            </p>
            <h1
              class="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Build your next product page with Vue + Tailwind.
            </h1>
            <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              A clean homepage design with featured product cards, hero
              messaging, and fast checkout flow.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <router-link
                to="/product"
                class="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
                Browse products
              </router-link>
              <router-link
                to="/addtocart"
                class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                View cart
              </router-link>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div class="rounded-[1.5rem] bg-slate-50 p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-900">
                Luna Smart Watch
              </h2>
              <p class="mt-3 text-sm text-slate-500">
                Elegant wearable with health tracking, notifications, and long
                battery life.
              </p>
            </div>
            <div class="rounded-[1.5rem] bg-slate-50 p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-900">
                Aurora Headphones
              </h2>
              <p class="mt-3 text-sm text-slate-500">
                Comfortable design with premium noise cancellation and crisp
                sound.
              </p>
            </div>
            <div class="rounded-[1.5rem] bg-slate-50 p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-900">
                Nova Laptop Stand
              </h2>
              <p class="mt-3 text-sm text-slate-500">
                Ergonomic desktop accessory for a cleaner workspace and better
                posture.
              </p>
            </div>
            <div class="rounded-[1.5rem] bg-slate-50 p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-900">
                Orion Desk Lamp
              </h2>
              <p class="mt-3 text-sm text-slate-500">
                Adjustable lighting with a minimal design for modern desks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="product in featuredProducts"
          :key="product.id"
          class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-60 w-full object-cover" />
          <div class="space-y-4 p-6">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-indigo-600">
                {{ product.category }}
              </p>
              <h2 class="mt-3 text-xl font-semibold text-slate-900">
                {{ product.name }}
              </h2>
              <p class="mt-3 text-sm leading-6 text-slate-500">
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

  const { addToCart } = useCart();

  const featuredProducts = ref([
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
      name: "Aurora Headphones",
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
  ]);

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
</script>

<style scoped></style>
