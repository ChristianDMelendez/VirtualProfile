window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="socials">
      <a href="https://x.com" target="_blank">
        <img src="${getPathPrefix()}assets/img/x-icon.svg" alt="X.com">
      </a>
      <a href="https://www.linkedin.com/in/christian-melendez-461278214/" target="_blank">
        <img src="${getPathPrefix()}assets/img/linkedin.svg" alt="LinkedIn">
      </a>
      <a href="https://github.com/ChristianDMelendez" target="_blank">
        <img src="${getPathPrefix()}assets/img/github.svg" alt="GitHub">
      </a>
    </div>
    <p>&copy; 2025 Christian Melendez. All rights reserved.</p>
  `;

  function getPathPrefix() {
    // Check if we're inside a subfolder like /html/
    const currentPath = window.location.pathname;
    return currentPath.includes('/html/') ? '../' : '';
  }
});
