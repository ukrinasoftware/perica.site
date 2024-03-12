import 'flowbite';

document.addEventListener('DOMContentLoaded', () => {
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
});
