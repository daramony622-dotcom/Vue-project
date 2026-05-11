<template>
  <nav
    class="sticky top-0 z-50 bg-slate-200 border-b border-slate-200 shadow-sm">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <router-link
        to="/"
        class="text-xl font-semibold tracking-tight text-slate-900">
        VueApp
      </router-link>

      <div class="hidden md:flex items-center gap-6">
        <router-link
          to="/"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          exact-active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Home
        </router-link>
        <router-link
          to="/dashboard"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Dashboard
        </router-link>
        <router-link
          to="/aboutpage"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          About
        </router-link>
        <router-link
          to="/product"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Product
        </router-link>
        <router-link
          to="/register"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Register
        </router-link>
        <router-link
          to="/addtocart"
          class="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          active-class="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Cart
          <span
            v-if="totalItems > 0"
            class="absolute -right-5 top-0 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">
            {{ totalItems }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useCart } from "../store/cart";

  const { totalItems } = useCart();
</script>
