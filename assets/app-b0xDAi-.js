import 'flowbite';

// Mobile menu toggle
const menuToggle = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
const mobileMenu = document.getElementById('mobile-menu-2');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

const lightSwitch = document.getElementById('light-switch');
if (localStorage.getItem('color-theme') === 'dark') {
    lightSwitch.checked = true;
}
lightSwitch.addEventListener('change', () => {
    const { checked } = lightSwitch;
    lightSwitch.checked = checked;
    if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }
});
