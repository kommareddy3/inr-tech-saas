// ================= CONTACT =================
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message Sent 🚀");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>

      <form onSubmit={submit} className="space-y-4 max-w-md">
        <input
          className="w-full p-3 rounded bg-white text-black"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 rounded bg-white text-black"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="w-full p-3 rounded bg-white text-black"
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}