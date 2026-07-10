// ==========================================
// Theme toggle — cream & maroon (default) <-> dark
// ==========================================

document.addEventListener(‘DOMContentLoaded’, () => {
const toggleBtn = document.getElementById(‘theme-toggle’);
const root = document.documentElement;

```
const DARK_VARS = {
    '--bg-primary': '#1C1613',
    '--bg-secondary': '#241C18',
    '--bg-elevated': '#2A2118',
    '--border-subtle': '#3A2E27',
    '--border-strong': '#4F3F35',
    '--text-primary': '#F2E9DD',
    '--text-secondary': '#C9B7A8',
    '--text-muted': '#8F7C6D',
};

let lightVars = {};
let isDark = false;

function applyDark() {
    lightVars = {};
    Object.keys(DARK_VARS).forEach((key) => {
        lightVars[key] = getComputedStyle(root).getPropertyValue(key);
        root.style.setProperty(key, DARK_VARS[key]);
    });
    toggleBtn.textContent = '☀️';
    isDark = true;
}

function applyLight() {
    Object.keys(lightVars).forEach((key) => {
        root.style.setProperty(key, lightVars[key]);
    });
    toggleBtn.textContent = '🌙';
    isDark = false;
}

toggleBtn.addEventListener('click', () => {
    if (isDark) {
        applyLight();
    } else {
        applyDark();
    }
});
```

});
