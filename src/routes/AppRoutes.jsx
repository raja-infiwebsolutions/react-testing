import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from '../pages/ContactPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contact" replace />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
