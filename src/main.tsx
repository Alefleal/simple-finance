import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import React from 'react';

import './theme/theme.css'; // Importa os estilos de tema

// Importa a função de inicialização do tema
import { initializeTheme } from './theme/theme';

// Inicializa o tema quando a aplicação for carregada
initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
