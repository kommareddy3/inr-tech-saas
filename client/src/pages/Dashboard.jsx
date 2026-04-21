import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Jan", users: 400, revenue: 2400 },
  { name: "Feb", users: 700, revenue: 3000 },
  { name: "Mar", users: 1000, revenue: 5000 },
  { name: "Apr", users: 1500, revenue: 7000 },
  { name: "May", users: 2000, revenue: 9000 },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3>Users</h3>
          <p className="text-2xl">2,000</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3>Revenue</h3>
          <p className="text-2xl">$9,000</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3>Growth</h3>
          <p className="text-2xl">+25%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Line Chart */}
        <div className="bg-slate-800 p-4 rounded-2xl">
          <h2 className="mb-4">User Growth</h2>
          <LineChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#3b82f6" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-slate-800 p-4 rounded-2xl">
          <h2 className="mb-4">Revenue</h2>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#22c55e" />
          </BarChart>
        </div>

      </div>
    </div>
  );
}