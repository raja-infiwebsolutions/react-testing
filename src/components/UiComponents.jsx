import React from 'react';
import '../styles/global.css';
import { assets } from '../assets/index.js';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto p-4 md:p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
          <h1 className="text-lg font-semibold">iCertify</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Dashboard</a>
          <a href="#" className="hover:text-gray-900">Contacts</a>
          <a href="#" className="hover:text-gray-900">Settings</a>
        </nav>
      </div>
    </header>
  );
}

export function SearchBar() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex items-center gap-3">
        <input
          id="search"
          className="flex-1 border rounded px-3 py-2 shadow-sm"
          placeholder="Search contacts or companies..."
          aria-label="Search contacts"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
      </div>
    </div>
  );
}

export function Tabs() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex gap-3 text-sm">
        <button className="px-3 py-2 rounded bg-gray-100">All</button>
        <button className="px-3 py-2 rounded">Customers</button>
        <button className="px-3 py-2 rounded">Suppliers</button>
      </div>
    </div>
  );
}

export function ContactTable({ data = null }) {
  const rows = data || [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com', company: 'Acme Inc.' },
    { id: 2, name: 'John Smith', email: 'john@example.com', company: 'Widgets Co.' },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="bg-white border rounded shadow-sm overflow-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 text-left text-xs text-gray-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img src={assets.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-gray-500">Member since 2021</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.company}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-sm px-2 py-1 border rounded">Edit</button>
                    <button className="text-sm px-2 py-1 border rounded text-red-600">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    // No-op for static demo
    alert('Form submitted (demo)');
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <form onSubmit={onSubmit} className="bg-white border rounded p-4 grid gap-3 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input id="name" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" rows="4" className="w-full border rounded px-3 py-2"></textarea>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Send</button>
        </div>
      </form>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 border-t bg-white">
      <div className="container mx-auto p-4 text-sm text-gray-500">© {new Date().getFullYear()} iCertify — All rights reserved.</div>
    </footer>
  );
}
