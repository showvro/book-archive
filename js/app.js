const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
}

const setButtonLabel = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
};

setButtonLabel();

toggleButton.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setButtonLabel();
});
