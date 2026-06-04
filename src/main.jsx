import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

export function bootstrap() {
  const el = document.getElementById('root');
  if (!el) return;
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// auto-run on import
bootstrap();
