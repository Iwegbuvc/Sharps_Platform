import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import API from "../api/api";

const statusColors = {
  pending: "bg-yellow-200 text-yellow-800",
  paid: "bg-green-200 text-green-800",
  shipped: "bg-blue-200 text-blue-800",
  delivered: "bg-green-200 text-green-800",
  cancelled: "bg-red-200 text-red-800",
};

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Prevent double fetch in Strict Mode
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch all dashboard stats from single endpoint
      const statsRes = await API.get("/admin/dashboard/stats");
      const data = statsRes.data || {};

      setStats({
        totalRevenue: `₦${(data.totalRevenue || 0).toLocaleString()}`,
        totalOrders: data.totalOrders || 0,
        totalProducts: data.totalProducts || 0,
      });

      // Set recent orders
      setRecentOrders(
        Array.isArray(data.recentOrders) ? data.recentOrders : [],
      );
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      setRecentOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      title: "Total Revenue",
      value: stats.totalRevenue,
      linkText: "Manage Orders",
      link: "/admin/orders",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      linkText: "Manage Orders",
      link: "/admin/orders",
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
      linkText: "Manage Products",
      link: "/admin/products",
    },
  ];

  if (loading) {
    return (
      <div className="w-full p-4 sm:p-6 text-center">
        <p className="text-gray-500">Loading dashboard data...</p>
      </div>
    );
  }
  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statsCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white shadow rounded-lg p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
            <Link
              to={stat.link}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              {stat.linkText}
            </Link>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-lg">
        <h2 className="text-lg font-medium p-4 border-b">Recent Orders</h2>

        {recentOrders.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No orders found</div>
        ) : (
          <>
            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentOrders.map((order) => (
                    <tr key={order._id}>
                      <td className="px-6 py-4 text-sm truncate">
                        {order._id?.slice(-8) || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        ₦
                        {(
                          order.totalAmount ||
                          order.totalPrice ||
                          0
                        ).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            statusColors[order.paymentStatus?.toLowerCase()] ||
                            "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {order.paymentStatus || "pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE CARDS */}
            <div className="md:hidden divide-y">
              {recentOrders.map((order) => (
                <div key={order._id} className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-sm">
                      {order._id?.slice(-8) || "N/A"}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        statusColors[order.paymentStatus?.toLowerCase()] ||
                        "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {order.paymentStatus || "pending"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                  <p className="font-semibold">
                    ₦
                    {(
                      order.totalAmount ||
                      order.totalPrice ||
                      0
                    ).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
