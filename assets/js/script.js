// ✅ Inject dark mode button under navbar (top-right, fixed)
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar && !document.getElementById('darkModeToggle')) {
    const toggleHTML = `
      <div class="dark-toggle-wrapper">
        <button id="darkModeToggle" aria-label="Toggle dark mode">🌙</button>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toggleHTML);
  }

  const toggleBtn = document.getElementById('darkModeToggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
});