// ================= HOME =================
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <h1 className="text-5xl font-bold mb-4">INR 🚀</h1>
      <p className="mb-6 text-gray-300">Infinite Next Reality</p>
      <a href="/app" className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600">
        Enter Dashboard
      </a>
    </div>
  );
}