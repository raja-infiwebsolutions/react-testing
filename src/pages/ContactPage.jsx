import React from 'react';
import { Header, SearchBar, Tabs, ContactTable, ContactForm, Footer } from '../components/UiComponents.jsx';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <SearchBar />
        <Tabs />
        <div className="container mx-auto p-4 md:p-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContactTable />
          </div>
          <aside className="md:col-span-1">
            <ContactForm />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
