import React, { useEffect, useState } from 'react';
import { toggleTheme } from '../../theme/theme';

// Importando as imagens
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';

interface ThemeToggleProps {
  className?: string; // Permite adicionar classes customizáveis
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  // Estado para armazenar o tema atual
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Verifica o tema no carregamento inicial
  useEffect(() => {
    const theme =
      localStorage.getItem('theme') ||
      (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    setIsDarkMode(theme === 'dark');
  }, []);

  const handleThemeToggle = () => {
    // Alterna o tema e atualiza o estado
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`theme-toggle-button ${className}`}
      onClick={handleThemeToggle}
    >
      <img
        src={isDarkMode ? moonIcon : sunIcon} // Exibe moonIcon(escuro) ou sunIcon(claro) dependendo do tema
        alt={isDarkMode ? 'Dark' : 'Light'}
        className="w-6 h-6 md:w-8 md:h-8 pt-1 cursor-pointer"
      />
    </button>
  );
};

export default ThemeToggle;
