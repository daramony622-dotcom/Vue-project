<template>
  <section class="min-h-screen bg-slate-50 py-14 text-slate-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-600">
            About VueApp
          </p>
          <h1
            class="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Designed to help your product stand out with a modern web
            experience.
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            VueApp is a lightweight Vue 3 starter project with Tailwind CSS and
            Vue Router. It is built for fast product landing pages, easy
            navigation, and an intuitive shopping experience.
          </p>
          <div
            class="mt-10 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
            <div
              class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm text-slate-500">Built with</p>
              <p class="mt-3 text-xl font-semibold text-slate-900">
                Vue 3 + Tailwind
              </p>
            </div>
            <div
              class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm text-slate-500">Focus</p>
              <p class="mt-3 text-xl font-semibold text-slate-900">
                Clean UI & fast checkout
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 class="text-lg font-semibold text-slate-900">Our mission</h2>
            <p class="mt-3 text-sm leading-6 text-slate-600">
              We help brands launch product pages with effortless user flows and
              beautiful visuals.
            </p>
          </div>
          <div class="rounded-[2rem] bg-indigo-600 p-6 text-white shadow-sm">
            <h2 class="text-lg font-semibold">Our vision</h2>
            <p class="mt-3 text-sm leading-6 text-indigo-100">
              Deliver engaging digital experiences that convert visitors into
              customers.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-[2rem] bg-white p-10 shadow-xl">
        <div class="grid gap-10 lg:grid-cols-3">
          <div class="space-y-4">
            <p class="text-sm uppercase tracking-[0.3em] text-indigo-600">
              What we offer
            </p>
            <h2 class="text-3xl font-semibold text-slate-900">
              Features that make your product page better.
            </h2>
          </div>

          <div class="space-y-6">
            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p class="font-semibold text-slate-900">Responsive layouts</p>
              <p class="mt-3 text-sm text-slate-500">
                Adaptive design for mobile and desktop with clean card-based
                components.
              </p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p class="font-semibold text-slate-900">Interactive cart</p>
              <p class="mt-3 text-sm text-slate-500">
                Built-in shopping cart and totals so users can preview costs
                before checkout.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p class="font-semibold text-slate-900">Fast navigation</p>
              <p class="mt-3 text-sm text-slate-500">
                Vue Router makes page transitions smooth and easy to maintain.
              </p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p class="font-semibold text-slate-900">Touchable UI</p>
              <p class="mt-3 text-sm text-slate-500">
                Friendly buttons and clear card layouts improve interaction on
                every device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
