import React from 'react';
import { Header, SearchBar, Tabs, ContactTable, ContactForm, Footer } from '../components/UiComponents.jsx';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Contacts</h1>
                <SearchBar />
              </div>

              <Tabs />

              <ContactTable />
            </div>
          </section>

          <aside>
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Add Contact</h2>
              <ContactForm />
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>Original page: <code>htmlfiles/contact.html</code></p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
