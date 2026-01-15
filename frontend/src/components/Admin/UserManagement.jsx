import { useState } from "react";

const usersData = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "3",
    name: "Bob Williams",
    email: "bob@example.com",
    role: "User",
    status: "Blocked",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Blocked: "bg-red-100 text-red-700",
};

const UserManagement = () => {
  const [users, setUsers] = useState(usersData);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  return (
    <div className="max-w-full p-4 sm:p-6 space-y-6 overflow-x-hidden">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Users Management</h1>
        <input
          type="text"
          placeholder="Search users..."
          className="border rounded-md px-4 py-2 w-full sm:w-64"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto max-w-full">
        <table className="min-w-full table-auto divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusColors[user.status]
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className="text-yellow-600 hover:underline text-sm"
                  >
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded-lg p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{user.name}</h3>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  statusColors[user.status]
                }`}
              >
                {user.status}
              </span>
            </div>

            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm">
              <span className="font-medium">Role:</span> {user.role}
            </p>

            <div className="flex gap-4 pt-2">
              <button className="text-blue-600 text-sm">View</button>
              <button
                onClick={() => toggleStatus(user.id)}
                className="text-yellow-600 text-sm"
              >
                {user.status === "Active" ? "Block" : "Unblock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
