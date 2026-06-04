import React from 'react';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto p-4 md:p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">IC</div>
          <div>
            <div className="text-sm text-gray-500">iCertify</div>
            <div className="text-xs text-gray-400">Contacts</div>
          </div>
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
    <div className="flex items-center gap-2">
      <label htmlFor="q" className="sr-only">Search</label>
      <div className="relative">
        <input id="q" name="q" className="border bg-gray-50 text-sm rounded-md pl-9 pr-3 py-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Search contacts" />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"><i data-lucide="search"></i></span>
      </div>
      <button className="btn btn--primary text-sm bg-indigo-600 text-white px-3 py-2 rounded-md">New</button>
    </div>
  );
}

export function Tabs() {
  return (
    <div className="mb-4">
      <div className="flex gap-2 text-sm">
        <button className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700">All</button>
        <button className="px-3 py-2 rounded-md hover:bg-gray-100">Customers</button>
        <button className="px-3 py-2 rounded-md hover:bg-gray-100">Vendors</button>
      </div>
    </div>
  );
}

const sample = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 555-1234', company: 'Acme Corp' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', phone: '+1 555-5678', company: 'Widget Co' },
  { id: '3', name: 'Eve Adams', email: 'eve@example.com', phone: '+1 555-9012', company: 'Tech LLC' },
];

export function ContactTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-sm text-gray-500 border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Company</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sample.map((c) => (
            <tr key={c.id} className="even:bg-gray-50">
              <td className="p-3 align-top">
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-gray-500">Member since 2021</div>
              </td>
              <td className="p-3 align-top">{c.email}</td>
              <td className="p-3 align-top">{c.phone}</td>
              <td className="p-3 align-top">{c.company}</td>
              <td className="p-3 align-top">
                <div className="flex gap-2">
                  <button className="text-sm text-indigo-600 hover:underline">Edit</button>
                  <button className="text-sm text-red-600 hover:underline">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactForm() {
  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input id="name" name="name" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 text-sm p-2" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 text-sm p-2" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 text-sm p-2" />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="flex-1 bg-indigo-600 text-white py-2 rounded-md text-sm">Save</button>
        <button type="button" className="flex-1 border border-gray-200 py-2 rounded-md text-sm">Cancel</button>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto p-4 text-sm text-gray-500 text-center">© {new Date().getFullYear()} iCertify — Migrated contact page</div>
    </footer>
  );
}
