<template>
  <section class="min-h-screen bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-10">
        <h1 class="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p class="mt-2 text-base text-slate-600">
          Welcome back! Here's your business overview.
        </p>
      </div>

      <!-- Statistics Cards -->
      <div class="grid gap-6 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div
          class="rounded-lg bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-600">Total Sales</p>
              <p class="mt-3 text-2xl font-bold text-slate-900">
                ${{ dashboardState.statistics.totalSales.toLocaleString() }}
              </p>
              <p class="mt-2 text-xs text-green-600 font-medium">
                ↑ {{ monthlyGrowth }}% from last month
              </p>
            </div>
            <div class="rounded-full bg-indigo-100 p-4">
              <svg
                class="h-6 w-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="rounded-lg bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-600">Total Orders</p>
              <p class="mt-3 text-2xl font-bold text-slate-900">
                {{ dashboardState.statistics.totalOrders }}
              </p>
              <p class="mt-2 text-xs text-green-600 font-medium">
                ↑ 12% increase
              </p>
            </div>
            <div class="rounded-full bg-blue-100 p-4">
              <svg
                class="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="rounded-lg bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-600">Products</p>
              <p class="mt-3 text-2xl font-bold text-slate-900">
                {{ dashboardState.statistics.totalProducts }}
              </p>
              <p class="mt-2 text-xs text-slate-500 font-medium">
                In inventory
              </p>
            </div>
            <div class="rounded-full bg-green-100 p-4">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10l8-4M4 17l8 4 8-4" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="rounded-lg bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-600">Active Users</p>
              <p class="mt-3 text-2xl font-bold text-slate-900">
                {{ dashboardState.statistics.activeUsers }}
              </p>
              <p class="mt-2 text-xs text-green-600 font-medium">↑ 8% growth</p>
            </div>
            <div class="rounded-full bg-purple-100 p-4">
              <svg
                class="h-6 w-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts and Tables Row -->
      <div class="grid gap-6 mb-10 grid-cols-1 lg:grid-cols-3">
        <!-- Sales Chart -->
        <div
          class="lg:col-span-2 rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div class="mb-6">
            <h2 class="text-lg font-semibold text-slate-900">Sales Overview</h2>
            <p class="mt-1 text-sm text-slate-600">Monthly sales performance</p>
          </div>

          <div class="h-64 flex items-end gap-4">
            <div
              v-for="(item, index) in dashboardState.salesData"
              :key="index"
              class="flex-1 flex flex-col items-center gap-2">
              <div
                class="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg transition hover:opacity-80 cursor-pointer"
                :style="{ height: (item.sales / 45000) * 200 + 'px' }"></div>
              <span class="text-xs font-medium text-slate-600">{{
                item.month
              }}</span>
              <span class="text-xs text-slate-500">
                ${{ (item.sales / 1000).toFixed(0) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <h2 class="mb-6 text-lg font-semibold text-slate-900">Quick Stats</h2>

          <div class="space-y-4">
            <div class="border-b border-slate-200 pb-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-slate-600"
                  >Completion Rate</span
                >
                <span class="text-sm font-bold text-slate-900">87%</span>
              </div>
              <div class="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div
                  class="h-full rounded-full bg-green-500"
                  style="width: 87%"></div>
              </div>
            </div>

            <div class="border-b border-slate-200 pb-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-slate-600"
                  >Return Rate</span
                >
                <span class="text-sm font-bold text-slate-900">3.2%</span>
              </div>
              <div class="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div
                  class="h-full rounded-full bg-red-500"
                  style="width: 3.2%"></div>
              </div>
            </div>

            <div class="pb-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-slate-600"
                  >Satisfaction</span
                >
                <span class="text-sm font-bold text-slate-900">94%</span>
              </div>
              <div class="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div
                  class="h-full rounded-full bg-blue-500"
                  style="width: 94%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Products and Recent Orders -->
      <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <!-- Top Products -->
        <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div class="mb-6">
            <h2 class="text-lg font-semibold text-slate-900">Top Products</h2>
            <p class="mt-1 text-sm text-slate-600">Best performing items</p>
          </div>

          <div class="space-y-4">
            <div
              v-for="product in dashboardState.topProducts"
              :key="product.id"
              class="flex items-center justify-between rounded-lg bg-slate-50 p-4">
              <div class="flex-1">
                <p class="text-sm font-semibold text-slate-900">
                  {{ product.name }}
                </p>
                <p class="mt-1 text-xs text-slate-600">
                  {{ product.sales }} sales • ${{
                    product.revenue.toLocaleString()
                  }}
                </p>
              </div>
              <div
                :class="[
                  'rounded-full px-3 py-1 text-xs font-medium',
                  product.trend === 'up'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700',
                ]">
                {{ product.trend === "up" ? "↑ Up" : "↓ Down" }}
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div class="mb-6">
            <h2 class="text-lg font-semibold text-slate-900">Recent Orders</h2>
            <p class="mt-1 text-sm text-slate-600">Latest customer orders</p>
          </div>

          <div class="space-y-3">
            <div
              v-for="order in dashboardState.recentOrders"
              :key="order.id"
              class="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div class="flex-1">
                <p class="text-sm font-semibold text-slate-900">
                  {{ order.customer }}
                </p>
                <p class="mt-1 text-xs text-slate-600">
                  {{ order.product }}
                </p>
                <p class="mt-1 text-xs text-slate-500">
                  {{ new Date(order.date).toLocaleDateString() }}
                </p>
              </div>
              <div class="flex flex-col items-end gap-2">
                <span class="text-sm font-semibold text-slate-900">
                  ${{ order.amount.toFixed(2) }}
                </span>
                <span
                  :class="[
                    'rounded-full px-2.5 py-0.5 text-xs font-medium',
                    order.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700',
                  ]">
                  {{
                    order.status.charAt(0).toUpperCase() + order.status.slice(1)
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useDashboard } from "../store/dashboard.js";

  const { dashboardState, monthlyGrowth } = useDashboard();
</script>

<style scoped></style>
