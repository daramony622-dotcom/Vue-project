import { reactive, computed } from "vue";

const dashboardState = reactive({
  statistics: {
    totalSales: 45230,
    totalOrders: 328,
    totalProducts: 156,
    activeUsers: 2847,
  },
  recentOrders: [
    {
      id: 1,
      customer: "John Doe",
      product: "Luna Smart Watch",
      amount: 299.99,
      date: "2026-05-11",
      status: "completed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Aurora Headphones",
      amount: 199.99,
      date: "2026-05-10",
      status: "completed",
    },
    {
      id: 3,
      customer: "Alex Johnson",
      product: "Luna Smart Watch",
      amount: 299.99,
      date: "2026-05-10",
      status: "pending",
    },
    {
      id: 4,
      customer: "Emily Brown",
      product: "Aurora Headphones",
      amount: 199.99,
      date: "2026-05-09",
      status: "completed",
    },
    {
      id: 5,
      customer: "Michael Wilson",
      product: "Luna Smart Watch",
      amount: 299.99,
      date: "2026-05-09",
      status: "shipping",
    },
  ],
  topProducts: [
    {
      id: 1,
      name: "Luna Smart Watch",
      sales: 245,
      revenue: 73175.55,
      trend: "up",
    },
    {
      id: 2,
      name: "Aurora Headphones",
      sales: 189,
      revenue: 37890.11,
      trend: "up",
    },
    {
      id: 3,
      name: "Zephyr Phone Case",
      sales: 456,
      revenue: 18240.0,
      trend: "down",
    },
    {
      id: 4,
      name: "Nova Screen Protector",
      sales: 378,
      revenue: 7560.0,
      trend: "up",
    },
  ],
  salesData: [
    { month: "Jan", sales: 28000 },
    { month: "Feb", sales: 32500 },
    { month: "Mar", sales: 38200 },
    { month: "Apr", sales: 42000 },
    { month: "May", sales: 45230 },
  ],
});

const updateStatistic = (key, value) => {
  if (dashboardState.statistics[key] !== undefined) {
    dashboardState.statistics[key] = value;
  }
};

const addOrder = (order) => {
  dashboardState.recentOrders.unshift({
    ...order,
    id: Math.max(...dashboardState.recentOrders.map((o) => o.id)) + 1,
  });
  if (dashboardState.recentOrders.length > 5) {
    dashboardState.recentOrders.pop();
  }
};

const updateOrderStatus = (orderId, status) => {
  const order = dashboardState.recentOrders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
  }
};

const monthlyGrowth = computed(() => {
  const current =
    dashboardState.salesData[dashboardState.salesData.length - 1]?.sales;
  const previous =
    dashboardState.salesData[dashboardState.salesData.length - 2]?.sales;
  if (!current || !previous) return 0;
  return (((current - previous) / previous) * 100).toFixed(1);
});

export function useDashboard() {
  return {
    dashboardState,
    updateStatistic,
    addOrder,
    updateOrderStatus,
    monthlyGrowth,
  };
}
