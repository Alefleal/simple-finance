// Função que detecta se o tema do sistema é escuro
export function detectTheme(): 'light' | 'dark' {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? 'dark' : 'light';
}

// Função para atualizar o tema com base na escolha do sistema ou do usuário
export function applyTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}

// Função para configurar o tema com base na escolha do sistema ou em preferências salvas
export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const systemTheme = detectTheme();
    applyTheme(systemTheme);
  }
}

// Função para alternar entre temas claro e escuro
export function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode')
    ? 'dark'
    : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme); // Salva a preferência
}
