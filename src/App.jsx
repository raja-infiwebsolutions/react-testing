import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import './styles/global.css';

export default function App() {
  useEffect(() => {
    if (window?.lucide && typeof window.lucide.replace === 'function') {
      try { window.lucide.replace(); } catch (e) { /* ignore */ }
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-root">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
