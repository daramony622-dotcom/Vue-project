<template>
  <section class="min-h-screen bg-slate-50 py-16">
    <div class="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200">
        <div class="mb-10 text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
            Create account
          </p>
          <h1 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Join VueApp and start shopping faster.
          </h1>
          <p
            class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Register now to save your cart, track orders, and access exclusive
            product previews.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid gap-6 sm:grid-cols-2">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700"
                >First name</span
              >
              <input
                v-model="form.firstName"
                type="text"
                placeholder="Jane"
                class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700"
                >Last name</span
              >
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Doe"
                class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
            </label>
          </div>

          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-700"
              >Email address</span
            >
            <input
              v-model="form.email"
              type="email"
              placeholder="jane.doe@example.com"
              class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
          </label>

          <div class="grid gap-6 sm:grid-cols-2">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700"
                >Password</span
              >
              <input
                v-model="form.password"
                type="password"
                placeholder="********"
                class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
            </label>
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700"
                >Confirm password</span
              >
              <input
                v-model="form.confirmPassword"
                type="password"
                placeholder="********"
                class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
            </label>
          </div>

          <div
            class="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p class="font-medium text-slate-900">Why register?</p>
            <ul class="mt-3 space-y-2 leading-6">
              <li>• Save cart items and return later</li>
              <li>• Access exclusive product updates</li>
              <li>• Faster checkout experience</li>
            </ul>
          </div>

          <div
            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-slate-500">
              Already have an account?
              <router-link
                to="/loginpage"
                class="font-semibold text-indigo-600 hover:text-indigo-700">
                Login
              </router-link>
            </p>
            <button
              type="submit"
              class="inline-flex justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from "vue";

  const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    console.log("Register form submitted", {
      ...form,
    });
  };
</script>

<style scoped></style>
